var express = require('express');
var util = require('util');
var fs = require('fs');

var app = express.createServer(express.logger());
var myBuffer = fs.readFileSync("index.html")

app.get('/', function(request, response) {
  response.send(myBuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});