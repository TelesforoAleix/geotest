// NPM IMPORTS
import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

// BASE CONSTANTS AND FUNCTIONALITIES
const app = express();
const port = 3000;

// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//RENDERING OF THE MAIN PAGES
app.get("/", (req, res) => {
    res.render("index.ejs");
  }); 
  


  
 

// BACKGROUND FUNCTIONALITIES AND NOTIFICATIONS
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });