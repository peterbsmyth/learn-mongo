# learning_mongo
This repository is set up to help you learn to query MongoDb collections. You will go through 31 exercises. For each exercise you will query a collection of Restaurants to return the desired data. The exercises can be found here at w3resource.com.

## Intro to MongoDb

[MongoDb](http://www.mongodb.com/) is the leading NoSQL Database today. It is a document store. It supports SQL-like aggregation. It is used by the biggest companies on the planet but it is also quick and easy for solo developers to get started with.  
  
MongoDb stores data in JSON-like structures. This makes it a top-choice in the JavaScript world because it is so familiar and it fits hand-in-glove with the rest of a Javascript developer's toolkit. For example a database entry for a restaurant might look like:  

```json
{
  "address": {
     "building": "1007",
     "coord": [ -73.856077, 40.848447 ],
     "street": "Morris Park Ave",
     "zipcode": "10462"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "grades": [
     { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
     { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
     { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
     { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
     { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
  ],
  "name": "Morris Park Bake Shop",
  "restaurant_id": "30075445"
}
```

See how it's just JSON? Cool!  
  
The example document above might live in a collection simply called `Restaurants`. In the same database might be another collection called `Coffee Shops`. A collection in MongoDb is analagous to a table in a SQL database. A collection is a collection of related documents.  



## Getting Started  
```bash
git clone https://github.com/peterbsmith2/learning_mongo.git
cd learning_mongo
git checkout test
```
open `controllers/restaurant.controller.js` in your favorite text-editor

