const express = require('express');

module.exports = function() {
  const app = express();

  require('../server/routes/restaurant.routes')(app);

  return app;
}
