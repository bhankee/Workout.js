import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { getWodsQuery } from '../queries/queries';
import WodDetails from './WodDetails';

class WodList extends Component {
  state = {
    selected: null
  };
  displayWods() {
    let data = this.props.data;
    console.log('WOD DATA PROPS: ', data.wods);
    if (data.loading) {
      return <div>warming up...</div>;
    } else {
      return data.wods.map(wod => {
        console.log('WOD: ', wod);
        return <li key={wod.id}>{wod.name}</li>;
      });
    }
  }
  render() {
    console.log(this.props.data.wods);
    return (
      <div>
        <ul>{this.displayWods()}</ul>
        <WodDetails />
      </div>
    );
  }
}

export default graphql(getWodsQuery)(WodList);
