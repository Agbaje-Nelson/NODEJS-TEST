const request = require('supertest');
const assert = require('assert');
const app = require('../app.js');

describe('Contact Test', function(){

	it('it should create Contact List', function(done){
		let contact = {
			name: 'agbaje',
			phone_number: '08086056000',
            email: 'nelson@yahoo.com',
            location:'lagos'
		}
	   request(app)
      .post('/')
      .send(contact)
      .set('Accept', 'application/json')
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        assert.equal(res.body.name, 'agbaje');
        done();
      })
	})

    describe('Contact Test', function(){
   // Testing get all contact endpoint
  describe('To Get all contact List', function () {
      it('should respond with json containing a list of all users', function (done) {
          request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
      });
  });

   // Testing get a contact endpoint
  describe(' To Get a contact with an exisiting id', function () {
      it('should respond with json containing a list of all users', function (done) {
          request(app)
            .get('/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
      });
  });
  
});

});