const contacts = require('../models/contact-model');

var express = require('express');
var route = express.Router();

route.get('/', (req, res) => {
  res.json(contacts);
});

route.get('/:id', (req, res) => {
  res.json(contacts[req.params.id]);
});

module.exports = route;