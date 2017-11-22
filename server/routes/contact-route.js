const contactsController = require('../controllers/contact-controller');

const express = require('express');
const router = express.Router();

router.route('/')
  .get(contactsController.list)
  .post(contactsController.create);

router.route('/:id')
  .get(contactsController.get)
  .put(contactsController.update)
  .delete(contactsController.remove)

/*
const contacts = require('../models/contact-model');

router.get('/', (req, res) => {
  res.json(contacts);
});

router.get('/:id', (req, res) => {
  res.json(contacts[req.params.id]);
});
*/

module.exports = router;