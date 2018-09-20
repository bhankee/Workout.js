import bg from '../images/pattern_blue.png';
import React, { Component } from 'react';
import Kettlebell from './Kettlebell';

import { graphql } from 'react-apollo';
import { getGroupsQuery } from '../queries/queries';
import './GroupList.css';

import { Link } from '@reach/router';
//import WodDetails from './WodDetails';
const stickyBackground = {
  background: `url(${bg})`,
  backgroundAttachment: 'fixed'
};

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
      console.log();
      return data.groups.map(group => {
        console.log('GROUP: ', group);
        return (
          <ul className="groupList">
            <li key={group.id} className="groupLi">
              {group.name}
            </li>
            <ul className="wodList">
              {group.wods.map(wod => (
                <Link className="wodLink" to={`/wod/${wod.id}`}>
                  <li
                    key={wod.id}
                    className="wodLi"
                    onClick={e => this.setState({ selected: wod.id })}>
                    <span>
                      <Kettlebell />.{wod.name}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </ul>
        );
      });
    }
  };
  render() {
    console.log('CURRENT PROPS: ', this.props);
    console.log('WODS: ', this.props.data.groups);
    return (
      <div className="app" style={stickyBackground}>
        <h1>WORKOUT JS</h1>

        {this.displayGroups()}
      </div>
    );
  }
}

export default graphql(getGroupsQuery)(GroupList);
