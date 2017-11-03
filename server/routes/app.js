const contactRouter  = require('./contact-route');

var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Welcome Contacts App!');
});

app.use('/contacts/', contactRouter);

module.exports = app;