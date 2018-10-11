/* eslint-disable */
import React, { Component } from 'react';
<<<<<<< HEAD
import API from '../utils/API';
import SelectedMPP from './SelectedDash';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { func } from 'prop-types';

=======
import axios from 'axios'
// import API from '../utils/API';

class SearchBar extends Component {
    state = { value: '' };
>>>>>>> 9f4d815a6515a293cc329b0b12b99169ac1880a7

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
<<<<<<< HEAD
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
=======

    handleSubmit(event) {
        event.preventDefault();
        axios.post(`/api/mppName/${this.state.value}`)
        .then(res => {
            console.log(res.data)
            window.location ='/mpp/'+ this.state.value;
        })
    };

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log('enter key pressed')

            axios.post(`/api/mppName/${this.state.value}`)
            .then(res => {
                console.log(res.data)
                window.location ='/mpp/'+ this.state.value;
            })

        }
    }


    // re-route to MPP dashboard
>>>>>>> 9f4d815a6515a293cc329b0b12b99169ac1880a7

    render() {
        return (
            <div className="searchbar" style={{ display: 'inline-flex' }}>
<<<<<<< HEAD
                <input type='text' placeholder="search politicans"  className="input-reset ba b--black-20  mb2 db w-100 gray f6 f5-ns dib "onChange={event => this.handleChange(event)}></input>
                <button className=" mb2 mr3" onClick={this.handleSubmit}>
                    <i className="fa fa-search"></i>
=======
                <input type='text' placeholder="search politicans"  className="input-reset ba b--black-20  mb2 db w-100 gray f6 f5-ns dib "
                onChange={event => this.handleChange(event)}
                onKeyPress={ event => this.handleKeyPress(event)}
                />
                <button className=" mb2 mr3"
                onClick={event => this.handleSubmit(event)}
                >
                <i className="fa fa-search"></i>
>>>>>>> 9f4d815a6515a293cc329b0b12b99169ac1880a7
                </button>
            </div>
        )
    }
}



export default SearchBar;