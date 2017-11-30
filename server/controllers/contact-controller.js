const Contact = require('../models/contact-model');

function load(req, res, next, id) {
  Contact.get(id)
    .then((contact) => {
      req.contact = contact;
      return next();
    })
    .catch(e => next(e));
}

function get(req, res) {
  return res.json(req.contact);
}

function create(req, res, next) {
  const contact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email: req.body.email,
    country: req.body.country
  });

  contact.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

function update(req, res, next) {
  const contact = req.contact;
  contact.first_name = req.body.first_name,
  contact.last_name = req.body.last_name,
  contact.phone = req.body.phone,
  contact.email = req.body.email,
  contact.country = req.body.country

  contact.save()
    .then(savedContact => res.json(savedContact))
    .catch(e => next(e));
}

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Contact.list({ limit, skip })
    .then(contacts => res.json(contacts))
    .catch(e => next(e));
}

function remove(req, res, next) {
  const contact = req.contact;
  contact.remove()
    .then(deletedContacts => res.json(deletedContacts))
    .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };