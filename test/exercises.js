const assert   = require('assert');
const port     = 3000;

const express  = require('../config/express');
const mongoose = require('../config/mongoose');
const request  = require('request');

const db = mongoose();

const app = express();
const server = require('http').createServer(app);


describe('Exercise', function() {

  before(function() {
    server.listen(port);
  });

  after(function() {
    server.close();
  });

  describe('1', function() {

    it('should return 25359 results', function(done) {
      this.timeout(25000);

      request('http://localhost:3000/api/1', function(err, res, body) {
        body = JSON.parse(body);
        assert.equal(body.length, 25359);
        done();
      })

    });

  });

  describe('2', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/2', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 25359 results', function() {

      assert.equal(parsedBody.length, 25359);

    });

    it('should only return restaurant_id, name, borough, and cuisine fields with _id', function() {

      assert.equal(parsedBody[0].address, undefined);
      assert.equal(parsedBody[0].grades, undefined);
      assert.notEqual(parsedBody[0].restaurant_id, undefined);
      assert.notEqual(parsedBody[0].name, undefined);
      assert.notEqual(parsedBody[0].borough, undefined);
      assert.notEqual(parsedBody[0].cuisine, undefined);

    })

  });

  describe('3', function() {

    it('should return 25359 results', function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/3', function(err, res, body) {
        body = JSON.parse(body);
        assert.equal(body.length, 25359);
        done();
      })

    });

    it('should only return restaurant_id, name, borough, and cuisine fields without _id', function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/3', function(err, res, body) {
        body = JSON.parse(body);
        assert.equal(body[0]._id, undefined);
        assert.equal(body[0].address, undefined);
        assert.equal(body[0].grades, undefined);
        assert.notEqual(body[0].restaurant_id, undefined);
        assert.notEqual(body[0].name, undefined);
        assert.notEqual(body[0].borough, undefined);
        assert.notEqual(body[0].cuisine, undefined);
        done();
      })

    })

  });

  describe('4', function() {

    it('should return 25359 results', function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/4', function(err, res, body) {
        body = JSON.parse(body);
        assert.equal(body.length, 25359);
        done();
      })

    });

    it('should only return restaurant_id, name, borough, and zipcode fields without _id', function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/4', function(err, res, body) {
        body = JSON.parse(body);
        assert.equal(body[0]._id, undefined);
        assert.notEqual(body[0].address.zipcode, undefined);
        assert.equal(body[0].grades, undefined);
        assert.notEqual(body[0].restaurant_id, undefined);
        assert.notEqual(body[0].name, undefined);
        assert.notEqual(body[0].borough, undefined);
        assert.equal(body[0].cuisine, undefined);
        done();
      })

    })

  });

  describe('5', function() {

    it('should return 2338 results', function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/5', function(err, res, body) {
        body = JSON.parse(body);
        assert.equal(body.length, 2338);
        done();
      })

    });

  });

  describe('6', function() {

    it('should return 5 results', function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/6', function(err, res, body) {
        body = JSON.parse(body);
        assert.equal(body.length, 5);
        done();
      })

    });

    it('should return only restaurants in the Bronx borough', function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/6', function(err, res, body) {
        body = JSON.parse(body);

        for (let i = 0; i < body.length; i++) {
          assert.equal(body[i].borough, 'Bronx');
        }
        done();
      });
    });

  });

  describe('7', function() {

    it('should return 5 results', function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/7', function(err, res, body) {
        body = JSON.parse(body);
        assert.equal(body.length, 5);
        done();
      });

    });

    it('should return only restaurants in the Bronx borough', function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/7', function(err, res, body) {
        body = JSON.parse(body);

        for (let i = 0; i < body.length; i++) {
          assert.equal(body[i].borough, 'Bronx');
        }
        done();
      });
    });

    it('should skip the first 5 results', function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/7', function(err, res, body) {
        body = JSON.parse(body);
        assert.equal(body[0].name, 'Manhem Club');
        done();
      });

    });

  });

  describe('8', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(15000);

      request('http://localhost:3000/api/8', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 4 results', function() {

      assert.equal(parsedBody.length, 4);

    });

  });

});
