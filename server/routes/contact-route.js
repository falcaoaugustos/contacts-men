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

router.param('id', contactsController.load)

module.exports = router;