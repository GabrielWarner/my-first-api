//importing express for the server and path so that it can be used with public folder
const express = require('express');
const path = require('path');
//importing helper function to read from file
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');

//initialize app
const app = express();
//setting a constant port number
const PORT = 3001;

//telling express to use the static folder called public
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//get request for sending back the index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//get request for my family API
app.get ('/api/family', (req, res) => {
    console.log("get request received for family")
    //using helper function to read the data in the database folder and then parse it to json
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
})

//set the app to listen to PORT constant
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);