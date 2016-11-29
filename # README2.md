# README2.md

**Message From Mars**

Message From Mars is a web application that utilizes NASA's MARS rover images and passes them through the Microsoft Computer Visions API, which generates an array of tags describing the image. These tags are then passed through a third API, Bing image search, which renders an image based on the tags. The two images are displayed side by side creating a computer generated diptych of an image from Mars and corresponding image from Earth. The process of generating the results is a conversation between three machines, leaving the viewer with a triptych representation of their findings. 
The app features two models, one for users, who are able to sign in and save images. Another model for guest users, who are able to search but not save their searches.
 

Message From Mars is a web application that utilizes NASA's MARS rover images and passes them through the Microsoft Computer Visions API, which generates an array of tags describing the image. These tags are then passed through a third API, BIng image search, which renders an image based off the tags. The 2 images are displayed side by side creating a computer generated diptych of an image from Mars and corresponding image form Earth. 

The app features two models, one for users, who are able to sign in and save images. Another model for guest users, who are able to search but not save their searches. 


**Technologies used:** 
API's: 
NASA: api.nasa.gov/mars-photos/api/v1/rovers
Microsoft Computer Visions: https://www.microsoft.com/cognitive-services/en-us/computer-vision-api
BING image search: https://www.microsoft.com/cognitive-services/en-us/bing-image-search-api

Express
Node
React
Html
CSS
WebPack
Javascript

**Wireframe**
![alt text](https://wireframe.cc/UdzfKu)

![alt text](https://wireframe.cc/QHcbQa)


Explanations of the technologies used
Three API's: 
NASA API: (api.nasa.gov/mars-photos/api/v1/rovers) - We used this API to grab random NASA Mars Rover images to pass it through the 
Microsoft Computer Visions API: (https://www.microsoft.com/cognitive-services/en-us/computer-vision-api). This API provide words associated with an image passed through
the site, based on the API's own analysis. The words provided will be searched on the 
Bing image search API: https://www.microsoft.com/cognitive-services/en-us/bing-image-search-api
and return an image based on the words


Expressjs and Nodejs - required middleware.
Reactjs - to build out the front-end through passing props with components.
Html - for Reactjs to interact and pass its props.
CSS - to style our page.
WebPack - required to link all the files together.
Javascript - language we used to build our web application.


A couple of paragraphs about the general approach you took
Once we brainstormed our concept, we decided on the three APIs to use. We split up 
the group where someone would work on database and the models, and another person 
would work on the middleware and components. We pushed onto Github every night and 
pulled from it the next morning to continue working.

Installation instructions for any dependencies
We npm installed many node dependencies and required webpack to connect the files.

Link to your ERDs - Diagrams of your models and their relationships
![alt text](https://editor.ponyorm.com/user/rn028940/project3)

Link to your user stories – who are your users, what do they want, and why?
Any guests can run our web application, but only users that have signed up for 
an account can save and delete the paired images.

Link to your wireframes – sketches of views and interfaces in your application
![alt text](https://wireframe.cc/UdzfKu)
![alt text](https://wireframe.cc/QHcbQa)

Descriptions of any unsolved problems or hurdles your team had to overcome
Early on, we encountered an issue where the NASA Mars Rover API was fetching too 
many results causing other functions to fire before the fetch call is fully 
completed. Since we only needed one result, we filtered the fetch call to return 
only one result to pass through to the next API. Another issue we had was how  
the APIs would get and post the data between one another. Saving onto the database 
posed another hurdle, as we spent a great deal of time figuring how to save strings 
down into SQL and how to connect the tables under our users model.

