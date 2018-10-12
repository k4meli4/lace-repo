/* eslint-disable */
import axios from 'axios';

export default {
  getHansard: function(name) {
    return axios.get('/api/hansard' + name).then(res => {
      console.log(res.data)
    })
  },
  getRecentBills: function() {
    return axios.get('/api/recentBills')
    // .then(res => {
    //   console.log(res.data)
    // })
  },
  getVotesByMpp: function(name) {
    return axios.get('/api/mppVotes')
    // .then(res => {
    //   console.log(res.data)
    // })
  },
    findByName: function(value) {
    return axios.get('/api/mppName/' + value)
  }
}
