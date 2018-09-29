import React, { Component } from 'react';
import MppInfo from './dashComponents/Mppinfo';

export default class SelectedMPP extends Component {
  state = {
    name: 'Hon. Doug Ford',
    position: 'Premier',
    number: '416-325-1941',
    picture:'https://www.ola.org/sites/default/files/member/profile-photo/doug_ford.jpg'
  };

  render() {
    return <MppInfo name={this.state.name} position={this.state.position} number={this.state.number} picture={this.state.picture}/>;
  }
}
// commit me