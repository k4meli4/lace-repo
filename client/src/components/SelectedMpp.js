/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// inport components
import Loader from './Loader';
import SMData from './SMData'; //MPP data
import MppInfo from './dashComponents/Mppinfo';
import FollowButton from './dashComponents/FollowButton';
// tools
import { Animated } from 'react-animated-css';
//

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
    // heigth: '85vh'
  }
});

class PaperSheet extends Component {
  // State
  state = {
    mppLockup: this.props.match.params.mppName,
    lastName: '',
    name: ' ',
    position: [],
    url: '',
    photo: ' ',
    party: '',
    dateOfService: '',
    currentRiding: '',
    ridingMap: '',
    hansard: [],
    votes: [],
    parliamentNumber: '',
    telephone: '',
    twitter: '',
    facebook: '',
    userId: '',
    followingId: '',

    isLoading: true
  };
  // --end of state

  // Helper functions
  mppSearch() {
    axios
      .get(`/api/mppName/${this.state.mppLockup}`, {
        name: name
      })
      .then(res => {
        this.setState({
          followingId: res.data[0]._id,
          lastName: res.data[0].lastName,
          name: res.data[0].name,
          position: res.data[0].careerDetails[0].positions,
          url: res.data[0].url,
          photo: res.data[0].photo,
          party: res.data[0].party,
          dateOfService: res.data[0].dateOfService,
          currentRiding: res.data[0].currentRiding,
          ridingMap: res.data[0].ridingMap,
          parliamentNumber: res.data[0].careerDetails[0].parliamentNumber,
          telephone: res.data[0].addressEmailId.Telephone
        });
      })
      .catch(err => console.log(err));
  }

  getCurrentUser = () => {
    axios
      .get('/api/currentUser')
      .then(res => {
        this.setState({ userId: res.data._id });
      })
      .catch(err => console.log(err));
  };
  // -- end of helpers
  // life cycle
  componentDidMount() {
    this.getCurrentUser();
    this.mppSearch();
    // setTimeout(() => {
    // this.getTwitter();
    // this.getFacebook();
    // }, 10000);
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }
  // --end of life cycle

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    const {
      name,
      position,
      url,
      photo,
      currentRiding,
      party,
      parliamentNumber,
      telephone,
      twitter,
      facebook,
      mppLockup,
      userId,
      followingId,
      lastName
    } = this.state;

    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            {/* {name} */}
            Mr. Ford (test text)
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
          <MppInfo
            followingId={followingId}
            lastName={lastName}
            name={name}
            position={position}
            url={url}
            photo={photo}
            currentRiding={currentRiding}
            party={party}
            parliamentNumber={parliamentNumber}
            telephone={telephone}
          />
          <FollowButton userId={userId} followingId={followingId} />
          <SMData mppLockup={mppLockup} />
        </Paper>
      </div>
    );
  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
