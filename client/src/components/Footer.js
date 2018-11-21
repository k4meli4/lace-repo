import React from 'react';

const footerStyle = {
  textAlign: 'center',
  position: 'absolute',
  bottom: '0px',
  // width: '-webkit-fill-available',
  bottom: '0',
  width: '100%',
  backgroundColor: '#009688',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '10px',
  paddingTop: '10px',
  color: 'white',
};
const Footer = () => <div style={footerStyle}>In Their Own Words &copy;</div>;

export default Footer;
