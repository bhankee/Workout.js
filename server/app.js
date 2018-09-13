require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
console.log('INSIDE APP. JS -------------------------------');

const app = express();

const PORT = process.env.PORT || 5000;
//allow cross-origin requests
app.use(cors());

mongoose.connect(
  `mongodb://bhankee:${process.env.MONGO_DB}@ds227352.mlab.com:27352/workoutjs`
);
mongoose.connection.once('open', () => {
  console.log('connected to database!');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log('Listening for requests on PORT 5000!');
});
