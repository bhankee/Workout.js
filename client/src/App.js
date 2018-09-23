import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router } from '@reach/router';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

//components

import GroupList from './components/GroupList';
import WodDetails from './components/WodDetails';
//import AddWod from './components/AddWod';

//apollo setup
const client = new ApolloClient({
  // if in dev uri is: 'http://localhost:8000/graphql'
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ParallaxProvider>
          <Router>
            <GroupList path="/" />
            <WodDetails path="/wod/:id" />
          </Router>
        </ParallaxProvider>
      </ApolloProvider>
    );
  }
}

export default App;
