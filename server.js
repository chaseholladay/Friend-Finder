// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
//path is built into node and not a npm required install
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
//changed to true
app.use(bodyParser.urlencoded({ extended: true }));
//commented this out
app.use(bodyParser.json());
//app.use(express.static(__dirname + '/app/public')); 


//from npm body-parser
// parse application/json

//this helps with requests to listen for styles
app.use( express.static('app/public'));
app.use(express.static('app/images'));

//app.get('/style.css', (req, res) => {
  //res.sendFile(__dirname + './app/public/style.css')
//})
//require the html-routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});