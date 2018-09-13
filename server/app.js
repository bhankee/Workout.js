require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
console.log('INSIDE APP. JS -------------------------------');

const app = express();

const PORT = process.env.PORT || 8000;
//allow cross-origin requests
app.use(cors());
// Priority serve any static files.
//app.use(express.static(path.resolve(__dirname, '../client/build')));

mongoose.connect(
  `mongodb://bhankee:${process.env.MONGO_DB}@ds227352.mlab.com:27352/workoutjs`
);
mongoose.connection.once('open', () => {
  console.log('connected to database!');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log('Listening for requests on PORT 8000!');
});
