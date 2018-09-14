require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;
//allow cross-origin requests
app.use(cors());
// Priority serve any static files.
//app.use(express.static(path.resolve(__dirname, '../client/build')));
const MONGODB_URI =
  process.env.MONGODB_URI ||
  `mongodb://bhankee:${process.env.MONGO_DB}@ds227352.mlab.com:27352/workoutjs`;
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true }
);
mongoose.connection.once('open', () => {
  console.log('connected to database!');
});
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
}
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log('Listening for requests on PORT 5000!');
});
