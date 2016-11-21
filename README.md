<!-- # MeteorBuddy

MeteorBuddy is an interactive search tool to locate meteorite landings near you! A guest user can enter their location and meteor buddy will show a map of nearby landings. The user can also filter their search by specifying the size and date range of the landing. MeteorBuddy will also render pictures and descriptions of comparable real world examples of the meteorite, i.e. if the meteorite was 10lbs, meteor buddy will show a 10 lb bowling ball. 

MeteorBuddy has 2 models: Users can login, search and save search. Guests can search, but not save their searches.

## Installation

Technologies Used: 

API: Data.Nasa.gov: https://data.nasa.gov/resource/y77d-th95.json
GoogleMaps

React.js, Express.js

![alt text](https://wireframe.cc/W45QBi) -->

# Message From Mars

Message From Mars taps into Nasa's open database of Mars Rover images. Users can choose random images from Mars. The image is then analyzed by Microsof computer vision API which generates an array of image tags that describe the image. These tags are then passed through a 3rd API (microsoft image search, BING) which searches images using the tags. The app will display the original image from Mars next to a searched image using it's tags. The user will have the ability to save the images while they are logged in. 

The result is a sort of computer generated image comparison. 
