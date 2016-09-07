const restaurants = require('../controllers/restaurants.controller');

module.exports = function(app) {

  app.route('/api/:id').get(restaurants.get);

}
