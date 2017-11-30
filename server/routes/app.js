const contactRouter  = require('./contact-route');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome Contacts App!');
});

app.use('/contacts/', contactRouter);

module.exports = app;