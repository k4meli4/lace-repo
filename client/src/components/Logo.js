/* eslint-disable */
import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import logo from '../images/logo.jpg';
import './styling/logoDisplay.css';

// const tolanding = setTimeout(() => window.location +'/test', 5000);

class Logo extends Component {
  // let tolanding = window.location +'/test'
  styles = {
    layout: {
      display: 'flex',
      // flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'cente',
      height: '100vh',
      backgroundColor: '#010101'
    },
    imgLogo: {
      width: '100vw',
      maxWidth: '1500px'
    }
  };

  componentDidMount() {
    console.log('its mounted');
    setTimeout(() => {
      console.log('this logo timer');
      window.location = '/test';
    }, 5000);
  }

  // tolanding = setTimeout(() => window.location +'/test', 5000);

  render() {
    return (
      <div style={this.styles.layout}>
        <Animated
          animationIn="fadeInRight"
          animationOut="fadeOutLeft"
          isVisible
          style={{ height: '100vh' }}
          id="isLogo"
        >
          <img
            className="center"
            style={this.styles.imgLogo}
            src={logo}
            alt="Logo"
          />
        </Animated>
      </div>
    );
  }
}

export default Logo;
