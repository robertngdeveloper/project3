// import the libs we need
import React, { Component } from 'react';
import './App.css';
import Bing from './bing/Bing.jsx';
import Vision from './vision/Vision.jsx';
import Rover from './rover/Rover.jsx';
import SignUpForm from './SignUp/SignUpForm.jsx';
import LogInForm from './LogIn/LogInForm.jsx';
import SavedImages from './SavedImages/SavedImages.jsx';

// create a React Component called _App_
class App extends Component {

  constructor() {
    super();

    this.state = {
      roverImage: '',
      searchImages: false,
      bingImage: '',
      visionText: '',
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
    //console.log('^^^^^^^^^', url)
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
        visionText: data.description.captions[0].text
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
        roverImage: data.photos[3].img_src,
        visionText: 'Click me'
      })
    })
    .catch(err => console.log(err))
  }

  getVision(){
    fetch(`/vision`)
    .then(r => r.json())
    .then((data) => {
      console.log('$$$$$$', data)
      this.setState({
        visionText: data
      })
    })
    .catch(err => console.log(err))
  }

  getBingImage(string){
    console.log('yo', string)
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
        bingImage: data.value[4].contentUrl,
        searchImages: true
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
            roverData={this.state.roverImage}
            getRoverImages={this.getRoverImages.bind(this)}
          />
          <Bing
            visionText={this.state.visionText}
            bingImage={this.state.bingImage}
            getBingImage={this.getBingImage.bind(this)}
          />
        </div>

          <div className="vision-container">
            <Vision
              visionText={this.state.visionText}
              roverImage={this.state.roverImage}
              getVisionData={this.getVisionData.bind(this)}
            />
          </div>
        <button>Refresh</button>
        <Vision />
          <div className="save-searches" onClick={() => this.saveSearch(this.state.roverImage, this.state.bingImage, this.state.visionText, this.state.username)}>
          Save Searches
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
