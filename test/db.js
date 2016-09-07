const assert = require('assert');
const factories = require('./factories');

describe('The Database', function() {

  it('should contain 3772 items', function() {

    let db = factories.restaurants();
    assert.equal(db.length, 3772);

  })

})
