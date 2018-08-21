const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({ schema }));

app.listen(8000, () => {
  console.log('Listening for requests on PORT 4000!');
});
