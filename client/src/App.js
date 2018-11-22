/* eslint-disable */
// eslint disbale to be removed once states added.
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
// import compoenents
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import SelectedDash from './components/SelectedDash';
import GenDash from './components/GenDash';
import UserDash from './components/UserDash';
import fakeData from './fakedata';
import Logo from './components/Logo';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Appbar from './components/Appbar';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import listMPPS from './components/AllMPPS';

// styling
// import SearchBar from './components/SearchBar';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    if (window.location.pathname === '/') {
      require('./logo.css');
    } else {
      require('./App.css');
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="acCointainer">
            <Appbar />
            {/* <Navbar id="navBar" /> */}
            <Route exact path="/" component={Logo} />
            <Route exact path="/test" component={Landing} />
            {/* <Route exact path="/test" component={Dashboard} /> */}
            <Route
              exact
              path="/user"
              render={props =>
                fakeData.map(follow => <UserDash {...props} item={follow} />)
              }
            />
            <Route path="/mpp/:mppName" component={SelectedDash} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
