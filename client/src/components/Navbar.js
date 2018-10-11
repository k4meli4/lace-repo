/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
// import * as actions from '../actions';

<<<<<<< HEAD
const Navbar = () => (
  <nav className="pa3 pa4-ns" style={{backgroundColor: 'lightblue'}}>
    <Link to="/" className="link dim black b f6 f5-ns dib mr3" title="Home">
      In Their Own Words!
    </Link>
=======

class Navbar extends Component {

  renderButton(){
    switch(this.props.auth){
      case null:
        return;
      case false:
      return (
        <a href="/auth/google"
          className="link dim gray f6 f5-ns dib mr3"
          title="login">Login With Google
        </a>
        )
      default:
        return(
          <a href="/api/logout"
          className="link dim gray f6 f5-ns dib mr3"
          title="login">Logout
          </a>
        )
    }
  }

  render(){
    return(
      <nav className="pa3 pa4-ns">
        <Link to="/" className="link dim black b f6 f5-ns dib mr3" title="Home">
        In Their Own Words!
        </Link>
>>>>>>> 9f4d815a6515a293cc329b0b12b99169ac1880a7
        <SearchBar/>
        {this.renderButton()}
        <Link to="/test" className="link dim gray f6 f5-ns dib mr3" title="Shortcut for testing">
          Test!
        </Link>
        <Link to="/User" className="link dim gray f6 f5-ns dib mr3" title="User Page">
          User Page
        </Link>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return{ auth: state.auth};
}

export default connect(mapStateToProps)(Navbar);
