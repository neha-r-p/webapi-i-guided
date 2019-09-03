//import
const express = require('express');

const server = express();

//handle HTTP GET requests to the / URL
server.get('/', (req, res) => {
    res.send('hello world')
});

const port = 7000;
server.listen(port, () => console.log('\napi running\n'));