//================================
//        Dependencies
//================================
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//================================
//      Import JSON Files
//================================
const projects = require("./projects.json");
const aboutMe = require("./about.json");

//================================
//       Initialize App
//================================
const app = express();

//================================
//           Middleware
//================================
//to avoid cors error when react app makes a request
app.use(cors());
//logging requests
app.use(morgan("dev"));

// Home route for testing our app
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Route for retrieving projects
app.get("/projects", (req, res) => {
    //send projects in JSON format
    res.json(projects);
});
//Route for about info
app.get("/about", (req, res) => {
    //send projects via JSON
    res.json(aboutMe);
});

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

//turn on the server listener
app.listen(PORT, () => console.log(`Listening to port on ${PORT}`));
