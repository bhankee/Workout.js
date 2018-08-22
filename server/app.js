require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  `mongodb://bhankee:${process.env.MONGO_DB}@ds227352.mlab.com:27352/workoutjs`
);
mongoose.connection.once('open', () => {
  console.log('connected to database!');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(8000, () => {
  console.log('Listening for requests on PORT 8000!');
});
