const assert   = require('chai').assert;
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
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/1', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 25359 results', function() {

      assert.equal(parsedBody.length, 25359);

    });

  });

  describe('2', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

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
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/3', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 25359 results', function() {

      assert.equal(parsedBody.length, 25359);

    });

    it('should only return restaurant_id, name, borough, and cuisine fields without _id', function() {

      assert.equal(parsedBody[0]._id, undefined);
      assert.equal(parsedBody[0].address, undefined);
      assert.equal(parsedBody[0].grades, undefined);
      assert.notEqual(parsedBody[0].restaurant_id, undefined);
      assert.notEqual(parsedBody[0].name, undefined);
      assert.notEqual(parsedBody[0].borough, undefined);
      assert.notEqual(parsedBody[0].cuisine, undefined);

    })

  });

  describe('4', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/4', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 25359 results', function() {

      assert.equal(parsedBody.length, 25359);

    });

    it('should only return restaurant_id, name, borough, and zipcode fields without _id', function() {

      assert.equal(parsedBody[0]._id, undefined);
      assert.notEqual(parsedBody[0].address.zipcode, undefined);
      assert.equal(parsedBody[0].grades, undefined);
      assert.notEqual(parsedBody[0].restaurant_id, undefined);
      assert.notEqual(parsedBody[0].name, undefined);
      assert.notEqual(parsedBody[0].borough, undefined);
      assert.equal(parsedBody[0].cuisine, undefined);

    })

  });

  describe('5', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/5', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 2338 results', function() {

      assert.equal(parsedBody.length, 2338);

    });

  });

  describe('6', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/6', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 5 results', function() {

      assert.equal(parsedBody.length, 5);

    });

    it('should return only restaurants in the Bronx borough', function() {

      for (let i = 0; i < parsedBody.length; i++) {
        assert.equal(parsedBody[i].borough, 'Bronx');
      }

    });

  });

  describe('7', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/7', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 5 results', function() {

      assert.equal(parsedBody.length, 5);

    });

    it('should return only restaurants in the Bronx borough', function() {

      for (let i = 0; i < parsedBody.length; i++) {
        assert.equal(parsedBody[i].borough, 'Bronx');
      }

    });

    it('should skip the first 5 results', function() {

      assert.equal(parsedBody[0].name, 'Manhem Club');

    });

  });

  describe('8', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/8', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 4 results', function() {

      assert.equal(parsedBody.length, 4);

    });

  });

  describe('9', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/9', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 12 results', function() {

      assert.equal(parsedBody.length, 12);

    });

    // it('should only have grades above 80 and below 100', function() {
    //
    //   for (let i = 0; i < parsedBody.length; i++) {
    //
    //     let scores = [];
    //
    //     for(let j = 0; j < parsedBody[i].grades.length; j++) {
    //       scores.push(parsedBody[i].grades[j].score);
    //       assert.isAbove(parsedBody[i].grades[j].score, 80);
    //       assert.isBelow(parsedBody[i].grades[j].score, 100);
    //     }
    //
    //   }
    //
    // });

  });

  describe('10', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/10', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 25 results', function() {

      assert.equal(parsedBody.length, 25);

    });


  });

  describe('11', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/11', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 22 results', function() {

      assert.equal(parsedBody.length, 22);

    });


  });

  describe('12', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/12', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 22 results', function() {

      assert.equal(parsedBody.length, 22);

    });


  });

  describe('13', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/13', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 12427 results', function() {

      assert.equal(parsedBody.length, 12427);

    });


  });

  describe('14', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/14', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 31 results', function() {

      assert.equal(parsedBody.length, 31);

    });


  });

  describe('15', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/15', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 45 results', function() {

      assert.equal(parsedBody.length, 45);

    });


  });
  describe('16', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/16', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 31 results', function() {

      assert.equal(parsedBody.length, 31);

    });


  });
  describe('17', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/17', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 323 results', function() {

      assert.equal(parsedBody.length, 323);

    });


  });
  describe('18', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/18', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 15049 results', function() {

      assert.equal(parsedBody.length, 15049);

    });


  });
  describe('19', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/19', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 10310 results', function() {

      assert.equal(parsedBody.length, 10310);

    });


  });
  describe('20', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/20', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 5756 results', function() {

      assert.equal(parsedBody.length, 5756);

    });


  });
  describe('21', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/21', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 22941 results', function() {

      assert.equal(parsedBody.length, 22941);

    });


  });
  describe('22', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/22', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 33 results', function() {

      assert.equal(parsedBody.length, 33);

    });


  });
  describe('23', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/23', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 4 results', function() {

      assert.equal(parsedBody.length, 4);

    });


  });
  describe('24', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/24', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 33 results', function() {

      assert.equal(parsedBody.length, 33);

    });


  });
  describe('25', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/25', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 25359 results', function() {

      assert.equal(parsedBody.length, 25359);

    });


  });
  describe('26', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/26', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 25359 results', function() {

      assert.equal(parsedBody.length, 25359);

    });


  });
  describe('27', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/27', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 25359 results', function() {

      assert.equal(parsedBody.length, 25359);

    });


  });
  describe('28', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/28', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 25359 results', function() {

      assert.equal(parsedBody.length, 25359);

    });


  });
  describe('29', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/29', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 25357 results', function() {

      assert.equal(parsedBody.length, 25357);

    });


  });
  describe('30', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/30', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 9068 results', function() {

      assert.equal(parsedBody.length, 9068);

    });


  });
  describe('31', function() {
    let parsedBody;

    before(function(done) {
      this.timeout(30000);

      request('http://localhost:3000/api/31', function(err, res, body) {
        parsedBody = JSON.parse(body);
        done();
      });

    });

    it('should return 91 results', function() {

      assert.equal(parsedBody.length, 91);

    });


  });


});
