//importing express for the server and path so that it can be used with public folder
const express = require('express');
const path = require('path');

//initialize app
const app = express();
//setting a constant port number
const PORT = 3001;

//telling express to use the static folder called public
app.use(express.static('public'));
