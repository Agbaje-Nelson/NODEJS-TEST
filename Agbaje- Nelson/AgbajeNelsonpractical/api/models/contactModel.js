var mongoose = require('mongoose');


var contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
      },
      location: {
        type: String,
        required: false,
      }
  })


  mongoose.model('Contact',contactSchema);