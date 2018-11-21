/* eslint-disable */
import React, { Component } from 'react';
// import { Table } from 'react-bootstrap';
import BillTable from './BillTable';
import API from '../../utils/API';
import axios from 'axios';
import "./voting.css";

const styles = {
  rightA: {
    marginRight: '0px',
  }
};

class VotingRecords extends Component {
  state = {
    votes: [],
    specificBills: []
  }
  //load on Voting Records page
  loadVotesByMpp = () => {
    axios.get(`/api/mppVotes/${this.props.mppLockup}`, {
      name: name
    })
      .then(res =>
        this.setState({ votes: res.data })
      )
      .catch(err => console.log(err));
  };

  loadSpecificBills = () => {
    API.getSpecificBills()
      .then(res => {
        this.setState({
          specificBills: res.data
        });
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.loadSpecificBills();
    this.loadVotesByMpp();
  }

  render() {
    return (
      <article
        style={styles.rightA} className="center br3 hidden ba b--black-10 mv4 w-90 vStyle">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Voting Records</h1>
        <div className="pa3 bt b--black-10">
          <BillTable specificBills={this.state.specificBills}
            votes={this.state.votes}
          />
        </div>
      </article>
    );
  }
}
export default VotingRecords;