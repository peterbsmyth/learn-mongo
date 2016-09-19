# :orange_book: :open_book: Learn MongoDb
> This repository will help you learn to query MongoDb collections. You will go through 32 exercises. For each exercise you will query a collection of Restaurants to return the desired data.   

## Intro to MongoDb

[MongoDb](http://www.mongodb.com/) is the leading NoSQL Database today. You'll find it supports SQL-like aggregation and is used by the big companies like Facebook and Expedia. Though used in enterprise-grade applications, it is also quick and easy for solo developers to get started with.  
  
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

  
The example document above might live in a collection simply called `Restaurants`. In the same database might be another collection called `Coffee Shops`. 

> A collection in MongoDb is analagous to a table in a SQL database. A collection is a collection of related documents.  



## Getting Started  

#### [Exercises can be found here](http://www.w3resource.com/mongodb-exercises/)

In your terminal execute the following commands:
```bash
git clone https://github.com/peterbsmith2/learning_mongo.git
cd learning_mongo
git checkout exercise
npm i
```

After completing the above:  
1. open `server/controllers/restaurant.controller.js` in your favorite text-editor  
2. Notice the structure of the document and read through the directions  
3. Begin writing queries and use the [reference documentation](#reference-documentation-to-help-with-queries)

## Running the Server
```bash
node index.js
```
  
then test in browser: `http://localhost:3000/api/1`
  
## Checking Your Answers
This repository includes test code which you can find in the `test` folder. When you've successfully completed the queries for an exercise, the tests will pass. Until you have, they will fail. To run the tests you must have mocha installed globally.
```bash
npm i -g mocha
```
  
With mocha installed, run 
```
npm test
```

**NOTE: Some of the queries return 25,000+ results and therefore take up to 15 seconds to respond.\* You may want to write a few queries at a time to reduce the amount of time you're waiting for the test suite to run. See the code in `test/exercises.js` for an additional tip if your tests are too slow.**

*This repository uses a free database hosted at [modulus](http://www.modulus.io). We are not worried about performance for the sake of this repository, only learning queries. It would be unwise in most situations to write queries which return 25,000+ results. (One way that developers reduce the size of responses is called pagination. This means that a request may only return up to 100 results. It will include in those results an endpoint to query to return the next 100 results. Exercise 7 reveals how this works.)

##Reference Documentation to help with queries

[Mongoose](http://mongoosejs.com/docs/guide.html)  
[MongoDb](https://docs.mongodb.com/manual/tutorial/query-documents/)  

## Stuck? Have a question?

Open an [issue](https://www.github.com/peterbsmith2/learn-mongo/issues)! 
