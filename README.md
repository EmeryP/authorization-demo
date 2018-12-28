# React App with Token Authorization
Using token authorization with a React app that's connected to a backend hosted at Heroku. This app verifies if the username and password used during signin are valid and then returns and displays a JSON Web Token that can actually be decoded at `https://jwt.io/` and will indicate the users capabilities. 

### Getting Started
* Fork and clone this repo to your local machine
* Run `npm install` from your cmd line
* Run `npm start` from your cmd line to view the app in your browser
* In the browser, insert a username and password from below to return a token with the appropriate capabilities.

### Backend Info
* Heroku backend `https://javascript-401-api.herokuapp.com`
* Usernames that have authorization to access database
  * Username: `admin` Password: `ADMIN`
    * Capabilities: `create`, `read`, `update`, `delete` 
  * Username: `editor` Password: `EDITOR`
    * Capabilities: `create`, `read`, `update`
  * Username: `user` Password: `USER`
    * Capabilities: `read`