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
// import Login from './components/Login';
// import Signup from './components/Signup';
// import listMPPS from './components/AllMPPS';

// styling
import './App.css';
// import SearchBar from './components/SearchBar';

class App extends Component {

  componentDidMount() {
		this.props.fetchUser();
	}

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
        <Navbar />
<<<<<<< HEAD
        <Route exact path="/" component={Landing} />
        <Route exact path="/test" component={SelectedDash} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/user"
        render={(props) =>
          fakeData.map(follow => (
            <UserDash {...props}
              item={follow}
              />)
            )
          }
        />
=======
          <Route exact path="/" component={Landing} />
          <Route exact path="/test" component={GenDash} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/user"
          render={(props) =>
            fakeData.map(follow => (
              <UserDash {...props}
                item={follow}
                />)
              )
            }
          />
          <Route path="/mpp/*" component={SelectedDash} />
>>>>>>> 9f4d815a6515a293cc329b0b12b99169ac1880a7
        </div>
      </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions)(App);
