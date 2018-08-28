import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import WodList from './components/WodList';
import GroupList from './components/GroupList';
//import AddWod from './components/AddWod';

//apollo setup
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1> JS Wods</h1>
          <WodList />
          <GroupList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
