const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

mongoose.Promise = global.Promise;

exports.get = function(req, res) {
  exercises[req.params.id](req, res);
}

let exercises = {};

exercises[1] = function(req, res) {

  Restaurant.find({}, function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}

exercises[2] = function(req, res) {

  Restaurant.find({}, 'restaurant_id name borough cuisine',  function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}

exercises[3] = function(req, res) {

  Restaurant.find({}, '-_id restaurant_id name borough cuisine',  function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}


exercises[4] = function(req, res) {

  Restaurant.find({}, '-_id restaurant_id name borough address.zipcode',  function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}


exercises[5] = function(req, res) {

  Restaurant.find({ borough: 'Bronx' }, function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}


exercises[6] = function(req, res) {

  Restaurant.find({ borough: 'Bronx' }).limit(5).exec(function(err, restaurants) {
    if (err) res.status(500).json(err);
    res.json(restaurants);
  });

}


exercises[7] = function(req, res) {

  Restaurant
    .find({ borough: 'Bronx' })
    .limit(5)
    .skip(5)
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[8] = function(req, res) {

  Restaurant
    .find({ 'grades.score': { $gt: 90 } })
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[9] = function(req, res) {

  Restaurant
    .find({ 'grades.score': { $gt: 80, $lt: 100 } })
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[10] = function(req, res) {

  Restaurant
    .find( {'address.coord.0': { $lt: -95.754168 }} )
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[11] = function(req, res) {

  Restaurant
    .find({
      $and: [
        {'address.coord': { $lt: -65.754168 }},
        {'grades.score': { $gt: 70 }},
        {cuisine: { $not: /American/ }}
      ]
    })
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[12] = function(req, res) {

  Restaurant
    .find({
      'address.coord': { $lt: -65.754168 },
      'grades.score': { $gt: 70 },
      cuisine: { $not: /American/ }
    })
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[13] = function(req, res) {

  Restaurant
    .find({
      borough: { $not: /Brooklyn/ },
      'grades.grade': { $eq: 'A' },
      cuisine: { $not: /American/ }
    })
    .sort('-cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[14] = function(req, res) {

  Restaurant
    .find({
      name: /^Wil/
    },'restaurant_id name borough cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[15] = function(req, res) {

  Restaurant
    .find({
      name: /ces$/
    },'restaurant_id name borough cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[16] = function(req, res) {

  Restaurant
    .find({
      name: /Reg/
    },'restaurant_id name borough cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[17] = function(req, res) {

  Restaurant
    .find({
      borough: 'Bronx',
      $or: [
        {cuisine: 'American'},
        {cuisine: 'Chinese'}
      ]
    })
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[18] = function(req, res) {

  Restaurant
    .find({
      borough: { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] }
    },'restaurant_id name borough cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[19] = function(req, res) {

  Restaurant
    .find({
      borough: { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] }
    },'restaurant_id name borough cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[20] = function(req, res) {

  Restaurant
    .find({
      'grades.score': {
        $not: { $gt: 10 }
      }
    },'restaurant_id name borough cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[21] = function(req, res) {

  Restaurant
    .find({
      $or: [
        {name: /^Wil/},
        {cuisine: { $nin: ['American', 'Chinese'] }}
     ]
    },'restaurant_id name borough cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[22] = function(req, res) {

  Restaurant
    .find({
      $and: [
        {'grades.score': { $eq: 11 }},
        {'grades.grade': { $eq: 'A' }},
        {'grades.date': { $eq: new Date('2014-08-11T00:00:00Z') }}
      ]
    },'restaurant_id name borough cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[23] = function(req, res) {

  Restaurant
    .find({
      $and: [
        {'grades.1.score': { $eq: 9 }},
        {'grades.1.grade': { $eq: 'A' }},
        {'grades.1.date': { $eq: new Date('2014-08-11T00:00:00Z') }}
      ]
    },'restaurant_id name borough grades cuisine')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[24] = function(req, res) {

  Restaurant
    .find({
      'address.coord.1': { $lt: 52, $gt: 42 }
    },'restaurant_id name address')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[25] = function(req, res) {

  Restaurant
    .find({
    })
    .sort('name')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[26] = function(req, res) {

  Restaurant
    .find({
    })
    .sort('-name')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[27] = function(req, res) {

  Restaurant
    .find({
    })
    .sort('name -borough')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[28] = function(req, res) {

  Restaurant
    .find({
      'address.street': { $exists: true }
    })
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[29] = function(req, res) {

  Restaurant
    .find({
      'address.coord.0': { $type: 1 }
    })
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[30] = function(req, res) {

  Restaurant
    .find({
      'grades.score': { $mod: [7,0] }
    }, 'name borough restaurant_id grades')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[31] = function(req, res) {

  Restaurant
    .find({
      name: /mon/
    }, 'name borough cuisine restaurant_id address.coord')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


exercises[32] = function(req, res) {

  Restaurant
    .find({
      name: /^Mad/
    }, 'name borough cuisine restaurant_id address.coord')
    .exec(function(err, restaurants) {
      if (err) res.status(500).json(err);
      res.json(restaurants);
    });

}


