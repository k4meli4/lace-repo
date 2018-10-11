/* eslint-disable */
import axios from 'axios';
import React from 'react';
import SelectedMPP from '../components/SelectedDash';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


export default {
  getHansard: function(name) {
    return axios.post('/api/hansard' + name).then(res => {
      // console.log(res.data);
    })
  },

  findByName: function(value) {
    return axios.post('/api/mppName/' + value).then(res => {
      // console.log(res.data)
      const url = res.data[0].url
      const picture = res.data[0].photo
      const name = res.data[0].name
      const position = res.data[0].careerDetails[0].positions
      // console.log(url);
      // console.log(picture);
      // console.log(name);
      // console.log(position);
      const stateObj = {
        url: url,
        picture: picture,
        name: name,
        position: position
      };
      return stateObj;
  
    });  
  }
}
  