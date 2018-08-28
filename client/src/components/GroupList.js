import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import { getGroupsQuery } from '../queries/queries';
import './GroupList.css';
//import WodDetails from './WodDetails';

class GroupList extends Component {
  state = {
    selected: null
  };

  displayGroups = () => {
    let data = this.props.data;
    console.log('GROUP DATA: ', data);

    if (data.loading) {
      return <div>warming up...</div>;
    } else {
      return data.groups.map(group => {
        console.log('GROUP: ', group);
        return (
          <li key={group.id}>
            {group.name}
            <ul className="wodList">
              {group.wods.map(wod => (
                <li
                  key={wod.id}
                  onClick={e => this.setState({ selected: wod.id })}>
                  {wod.name}
                </li>
              ))}
            </ul>
          </li>
        );
      });
    }
  };
  render() {
    console.log('CURRENT PROPS: ', this.props);
    console.log('WODS: ', this.props.data.groups);
    return (
      <div>
        <ul className="groupList">{this.displayGroups()}</ul>
        <li>GroupDetails component coming here!</li>
      </div>
    );
  }
}

export default graphql(getGroupsQuery)(GroupList);
