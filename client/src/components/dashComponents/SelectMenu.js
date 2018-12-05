/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import CreatableSelect from 'react-select/lib/Creatable';
import arrayNames from '../list/arrayNames';

const names = arrayNames.map(name => {
  return name.name;
});

export default class SelectMenu extends Component {
  state = {
    value: ''
  };
  handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    axios
      .post(`/api/mppName/${newValue}`)
      .then(res => {
        this.setState({ value: newValue });
        window.location = `/mpp/${this.state.value}`;
        this.loading = false;
      })
      .catch(err => console.log(err));
  };
  handleInputChange = (value, actionMeta) => {
    console.group('Input Changed');
    console.log(value);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    return (
      <CreatableSelect
        isClearable
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        options={names}
      />
    );
  }
}
