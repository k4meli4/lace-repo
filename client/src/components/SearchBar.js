/* eslint-disable */
import React, { Component } from 'react';
import API from '../utils/API';
import SelectedMPP from './SelectedDash';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { func } from 'prop-types';


function FetchMPP () {
    return new Promise((resolve, reject) => {
        API.findByName(this.state.value)
        .then()
        .catch(error => reject(error))
    });
}

class SearchBar extends Component {        
    constructor(props) {
        super(props);
        this.state = { value: '', mppLookUp: '' } 
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });

    }
    //use promises
    handleSubmit(e) {
        e.preventDefault();
        var myState = {}
        console.log(this.state)
        API.findByName(this.state.value).then(res => {myState = res; return myState})
        .then(this.setState({mppLookUp: myState}))
        .then(setTimeout(() => console.log(this.state) , 5000))
        .catch(err => console.log(err))
        
    };

    render() {
        return (
            <div className="searchbar" style={{ display: 'inline-flex' }}>
                <input type='text' placeholder="search politicans"  className="input-reset ba b--black-20  mb2 db w-100 gray f6 f5-ns dib "onChange={event => this.handleChange(event)}></input>
                <button className=" mb2 mr3" onClick={this.handleSubmit}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        )
    }
}



export default SearchBar;