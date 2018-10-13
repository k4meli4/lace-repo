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

  styles = {
    layout:{
      display:'flex',
      justifyContent: 'center',
      'align-items':'cente'
    }
  }

  render() {
    return <img style={this.styles.layout} src={logo} alt="Logo" />;
  }
}

export default Logo;
