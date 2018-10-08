/* eslint-disable */
import React, { Component } from 'react';
import API from '../utils/API';

class SearchBar extends Component {
     state = { value: '' };        

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        API.findByName(this.state.value)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    // re-route to MPP dashboard

    render() {
        return (
            <div className="searchbar" style={{ display: 'inline-flex' }}>
                <input type='text' placeholder="search politicans" onChange={event => this.handleChange(event)}></input>
                <button onClick={event => this.handleSubmit(event)}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        )
    }
}

export default SearchBar;