const restaurants = require('../controllers/restaurants.controller');

module.exports = function(app) {
  app.route('/api/1')
    .get(restaurants.one);
}
