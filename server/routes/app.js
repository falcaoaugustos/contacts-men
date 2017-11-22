const contactRouter  = require('./contact-route');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome Contacts App!');
});

app.use('/contacts/', contactRouter);

module.exports = app;