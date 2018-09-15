import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router } from '@reach/router';
import './App.css';

//components

import GroupList from './components/GroupList';
import WodDetails from './components/WodDetails';
//import AddWod from './components/AddWod';

//apollo setup
const client = new ApolloClient({
  // if in dev uri: 'http://localhost:8000/graphql'
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <GroupList path="/" />
          <WodDetails path="/wod/:id" />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
