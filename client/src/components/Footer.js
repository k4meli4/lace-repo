import React from 'react';

const footerStyle = {
  textAlign: 'center',
  position: 'absolute',
  bottom: '0px',
  width: '100%',
  backgroundColor: '#009688',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '10px',
  paddingTop: '10px',
  color: 'white'
};
const Footer = () => (
  <div>
    <div
      className="postalCodeSearch"
      style={{
        position: 'absolute',
        bottom: '40px',
        width: '100%',
        marginTop: '0px',
        marginBottom: '0px',
        height: 'auto',
        backgroundColor: 'grey',
        paddingBottom: '20px',
        paddingTop: '20px'
      }}>
      <h3>Not Sure who your MPP is?</h3>
      <a
        href="https://voterinformationservice.elections.on.ca/en/election/search?mode=postalCode"
        target="blank">
        Click here to search by postal code
      </a>
    </div>
    <div style={footerStyle}>In Their Own Words &copy;</div>
  </div>
);

export default Footer;
