var express = require('express');
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// setting up Handlebars 
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
app.set("view engine", "handlebars");
 
// Routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// Start server and link port 
app.listen(PORT, function() {
    console.log(`sever listening on http://localhost:${PORT}`);
});

// Connect to Mongo DB to app
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScraperDB"
mongoose.connect(MONGODB_URI, { useNewURLParser: true});
