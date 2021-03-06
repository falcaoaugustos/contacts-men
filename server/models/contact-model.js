const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: false
  }
});

ContactSchema.statics = {
  get(id) {
    return this.findById(id)
      .exec();
  },
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;