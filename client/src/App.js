/* eslint-disable */
// eslint disbale to be removed once states added.
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <BrowserRouter>
        <div>
        <Navbar />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
