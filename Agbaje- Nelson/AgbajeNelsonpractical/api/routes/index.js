var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});



var ctrlAuth = require('../controllers/authentication');
var ctrlContact = require('../controllers/contact')



router.post('/contact', auth, ctrlContact.createContact);
router.get('/contact', auth, ctrlContact.getAllContact);
router.get('/contact/:id', auth, ctrlContact.getContact);
router.put('/contact/:id', auth, ctrlContact.updateContact);
router.delete('/contact/:id', auth, ctrlContact.deleteContact);


// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login,
);

module.exports = router;
