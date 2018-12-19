
var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

module.exports.createContact = function(req, res) {

    Contact(req.body)
    .save(function(err, result) {	
		if (err) return console.error(err);
		res.status(201).send(result);
	})
  };

  module.exports.getAllContact = function(req, res) {

    Contact.find(function(err, contact) {
		if (err) return console.error(err);
		res.status(201).send(contact);
  });
  };


  module.exports.getContact = function(req, res) {
    Contact.findById(req.params.id, function(err, result) {
        if (err) return console.error(err);
          res.status(201).send(result);
        });
  };


  module.exports.updateContact = function(req, res) {
    Contact.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
        if (err) return console.error(err);
        res.send('contact successfully udpated.');
    });
  };


  module.exports.deleteContact = function(req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err) {
        if (err) return console.error(err);
        res.status(201).send("contact successfully deleted.");
    });
  };

