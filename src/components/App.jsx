// import the libs we need
import React, { Component } from 'react';
import './App.css';
import Bing from './bing/Bing.jsx';
import Vision from './vision/Vision.jsx';
import Rover from './rover/Rover.jsx';
import SignUpForm from './SignUp/SignUpForm.jsx';
import LogInForm from './LogIn/LogInForm.jsx';
import SavedImages from './SavedImages/SavedImages.jsx';
import Refresh from '../images/Refresh.png';
import Crosshair from '../images/Inverse.png';

// create a React Component called _App_
class App extends Component {

  constructor() {
    super();

    this.state = {
      roverImage: Crosshair,
      searchImages: false,
      bingImage: Crosshair,
      visionText: '',
      Refresh: Refresh,
      counter: 0,
      roverBox: 'boxcrosshair',
      bingBox: 'boxcrosshair',
      roverContainer: 'rover-container',
      bingContainer: 'bing-container',
      signup: {
        username: '',
        password: ''
      },
      login: {
        loggedIn: false,
        username: '',
        password: ''
      },
      username: '',
      savedImages: ''
    };
   }

  getVisionData(url) {
    fetch('/vision', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ 'url': url }),
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data)
      this.setState({
        counter: 2,
        visionText: data.description.captions[0].text,
        CrosshairHover: ''
      })
    })
    .catch(err => console.log(err))
  }

  getRoverImages(){
    fetch(`/rover`)
    .then(r => r.json())
    .then((data) => {
      // console.log('$$$$$$', data.photos[1].img_src)
      this.setState({
        roverBox: 'large-images',
        roverContainer: 'large-images-container',
        counter: 1,
        roverImage: data.photos[3].img_src,
        roverImage: data.photos[2].img_src,
        RoverImageHover: '',
        visionText: <img className="brighten" className="crosshair" src={Crosshair} alt="Click"/>
      })
    })
    .catch(err => console.log(err))
  }

  refreshPage(){
    this.setState({
      roverImage: Crosshair,
      searchImages: false,
      bingImage: Crosshair,
      visionText: '',
      Refresh: Refresh,
      counter: 0,
      roverBox: 'boxcrosshair',
      bingBox: 'boxcrosshair',
      roverContainer: 'bing-rover-container',
      bingContainer: 'bing-rover-container'
    })
  }

  getVision(){
    fetch(`/vision`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        visionText: data
      })
    })
    .catch(err => console.log(err))
  }

  getBingImage(string){
    fetch(`/bing`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ 'string': string }),
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        bingBox: 'large-images',
        bingContainer: 'large-images-container',
        bingImage: data.value[4].contentUrl,
        searchImages: true,
        BingImageHover: ''
      })
    })
    .catch(err => console.log(err))
  }

  ///////////////////// Rafa's User Auth Code ////////////////

updateFormSignUpUsername(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: e.target.value,
        password: this.state.signup.password
      }
    });
  }

  updateFormSignUpPassword(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: this.state.signup.username,
        password: e.target.value
      }
    });
  }

  updateFormLogInUsername(e) {
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password
      }
    });
  }

  updateFormLogInPassword(e) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value
      }
    });
  }

  handleSignUp() {
    fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password
      })
    })
    .then(this.setState({
      username: this.state.login.username,
      signup: {
        username: '',
        password: ''
      }
    }))
    .then(this.alertInfo('You have signed up!'))
    .catch(err => console.log(err));
  }

  handleLogIn() {
    fetch('/api/auth', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password
      })
    })
    .then(this.setState({
      username: this.state.login.username,
      login: {
        username: '',
        password: ''
      }
    }))
    .then(this.onSuccessfulLogIn)
    .catch(err => console.log(err));
  }

  onSuccessfulLogIn(a,b) {
    console.log(a,b);
  }

  alertInfo(msg) {
    alert(msg);
  }

//////////////////////////////////////////////////////////////

// save search results to database
saveSearch(url, url2, text, username) {
  console.log('^^^^^^the username is:',username)
  return fetch(`/images`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify({
        'url': url,
        'url2': url2,
        'text': text,
        'username': username
       })
    })
  .catch(err => console.log(err));

}

getSavedImages() {
  console.log('hey i am fetching images')
  return fetch(`/images`, {
    method: 'GET'
  })
  .then(r => r.json())
  .then((data) => {
    console.log('$$$ THE DATA IS', data)
    this.setState({
      savedImages: data
    });
    console.log(this.state.savedImages)
  })
  .catch(err => console.log(err));
}
  render(){
    return (
      <div className="app-container">
        <SignUpForm
          signUpUsername={this.state.signup.username}
          signUpPassword={this.state.signup.password}
          updateFormUsername={event => this.updateFormSignUpUsername(event)}
          updateFormPassword={event => this.updateFormSignUpPassword(event)}
          handleFormSubmit={() => this.handleSignUp()}
        />
        <LogInForm
          className={this.state.login.loggedIn ? 'hidden' : ''}
          logInUsername={this.state.login.username}
          logInPassword={this.state.login.password}
          updateFormUsername={event => this.updateFormLogInUsername(event)}
          updateFormPassword={event => this.updateFormLogInPassword(event)}
          handleFormSubmit={() => this.handleLogIn()}
        />
        <div className="image-container">
          <Rover
            roverContainer={this.state.roverContainer}
            roverBox={this.state.roverBox}
            counter={this.state.counter}
            roverData={this.state.roverImage}
            getRoverImages={this.getRoverImages.bind(this)}
          />
          <Bing
            bingContainer={this.state.bingContainer}
            bingBox={this.state.bingBox}
            counter={this.state.counter}
            visionText={this.state.visionText}
            bingImage={this.state.bingImage}
            getBingImage={this.getBingImage.bind(this)}
          />
        </div>
        <div className="vision-container">
          <Vision
            counter={this.state.counter}
            visionText={this.state.visionText}
            roverImage={this.state.roverImage}
            getVisionData={this.getVisionData.bind(this)}
          />
        </div>
        <div className="refreshButton" onClick={() => {this.refreshPage()}}>
          <img className="refreshImage" src={this.state.Refresh} alt="Refresh"/>
        </div>
          <button>Refresh</button>
        <div className="save-searches" onClick={() => this.saveSearch(this.state.roverImage, this.state.bingImage, this.state.visionText, this.state.username)}>
          Save Searches
        </div>
        <div className="refreshButton" onClick={() => {this.refreshPage()}}>
          <img className="refreshImage" src={this.state.Refresh} alt="Refresh"/>
        </div>
        <SavedImages
        SavedImages={this.state.SavedImages}
        getSavedImages={this.getSavedImages.bind(this)}
        />
      </div>
    );
  }
}

export default App;
