var express = require('express');
var twilio = require('twilio');
var config = require('./config.js');

var app = express();
var client = new twilio(config.sid, config.token);

app.post('/resources', function(request, response) {
  console.log(response.body.toString('utf8'));
});

app.listen(process.env.PORT || 8080);
