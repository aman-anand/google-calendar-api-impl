//Imports and Config
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const config = require('./config.js');
//DB Setup
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
// mongoose.connect('mongodb://'+config.username+':'+config.password+'@ds143030.mlab.com:43030/'+config.databaseName);
mongoose.connect('mongodb://localhost:27017/Calendar_test');

//App Setup
app.use(morgan("combined"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
router(app);
//server setup
const port = process.env.PORT || 4240;
const server = http.createServer(app);
server.listen(port);
console.log("server listening on port ", port); 
