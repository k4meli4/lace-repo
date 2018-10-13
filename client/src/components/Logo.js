import React, { Component } from 'react';
import logo from '../images/logo.jpg';

// const tolanding = setTimeout(() => window.location +'/test', 5000);

class Logo extends Component {
  // let tolanding = window.location +'/test'
  componentDidUpdate() {
    console.log('its mounted');
    setTimeout(() => {
      console.log('this logo timer');
      window.location = '/test';
    }, 2000);
  }

  render() {
    return <img src={logo} alt="Logo" />;
  }
}

export default Logo;
