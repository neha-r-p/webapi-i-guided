//import
const express = require('express');

//import hubs-model file
const Hubs = require('./data/hubs-model') //will use Hubs to get access to the DB
//Hubs has find(), findById(), add(), remove(), update() methods

const server = express();

//handle HTTP GET requests to the / URL
server.get('/', (req, res) => {
    res.send('hello world')
});

//see a list of Hubs (similar to a channel on slack)

//create a Hub

//delete a Hub

//update a Hub

const port = 7000;
server.listen(port, () => console.log('\napi running\n')); //usually last line in file