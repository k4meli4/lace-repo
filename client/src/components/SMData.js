/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// inport components
import TwitterFeed from './TwitterFeed';
import FacebookFeed from './FacebookFeed';
import SpeechFeed from './dashComponents/SpeechFeed';
import EventFeed from './dashComponents/EventFeed';
import VotingRecords from './dashComponents/VotingRecords';
// Tool
import SocialList from './list/mppSocial';
// end of inports

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}
//
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    marginTop: '10px',
    backgroundColor: theme.palette.background.paper,
    // width: 500
    flexGrow: 1 // this will center
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  //
  getTwitter() {
    SocialList.forEach(tName => {
      if (tName.name === this.state.name) {
        return this.setState({ twitter: tName.twitter });
      }
    });
  }

  //
  getFacebook() {
    SocialList.forEach(fName => {
      if (fName.name === this.state.name) {
        console.log(fName.name);
        console.log(this.state.name);
        console.log(fName.facebook);
        return this.setState({ facebook: fName.facebook });
      }
    });
  }

  componentDidMount() {
    this.getTwitter();
    this.getFacebook();
  }

  render() {
    const { classes, theme, mppLockup } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Bills" />
            <Tab label="Speeches" />
            <Tab label="Events" />
            <Tab label="Twitter" />
            <Tab label="Facebook" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <VotingRecords
              votingRecords={VotingRecords}
              customStyle={styles.rightA}
            />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <SpeechFeed mppLockup={mppLockup} customStyle={styles.rightA} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <EventFeed />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <TwitterFeed />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <FacebookFeed />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
