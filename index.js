//import
const express = require("express");

//import hubs-model file
const Hubs = require("./data/hubs-model"); //will use Hubs to get access to the DB
//Hubs has find(), findById(), add(), remove(), update() methods

const server = express();

//handle HTTP GET requests to the / URL
server.get("/", (req, res) => {
  res.send("hello world");
});

//see a list of Hubs (similar to a channel on slack) /hubs
server.get("/hubs", (req, res) => {
    //Hubs.find() returns a promise, we need the bros [].then().catch()
  Hubs.find()
    .then(hubs => {
        // .json will convert (or try) the data passed to JSON before sending
        // also tells the client we're sending JSON through an HTTP header
        res.status(200).json(hubs);
    })
    .catch(err => {
        res.status(500).json({message: 'error getting the list of humbs'})
    });
});

//create a Hub

//delete a Hub

//update a Hub

const port = 7000;
server.listen(port, () => console.log("\napi running\n")); //usually last line in file
