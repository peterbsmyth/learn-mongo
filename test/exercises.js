const assert = require('assert');
const sinon = require('sinon');
const factories = require('./factories');

const Restaurant = require('../server/models/restaurant.model');
const controller = require('../server/controllers/restaurants.controller');

describe('exercise one', function() {
  beforeEach(function() {
    sinon.stub(Restaurant, 'find');
  });

  afterEach(function() {
    Restaurant.find.restore();
  });

  it('should respond with 3772 items', function() {
    const restaurants = factories.restaurants();
    Restaurant.find.yields(null, restaurants);
    const req = { params: {} };
    const res = { json: sinon.stub() };

    controller.one(req, res);
    sinon.assert.calledWith(res.json, restaurants);

  });

});

