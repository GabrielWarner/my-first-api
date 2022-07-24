//importing express for the server and path so that it can be used with public folder
const express = require('express');
const path = require('path');

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

//set the app to listen to PORT constant
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);