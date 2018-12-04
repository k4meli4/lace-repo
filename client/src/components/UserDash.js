/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import UnFollowButton from './dashComponents/UnFollowButton'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import axios from 'axios';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    marginLeft: '50px',
    marginTop: '10px',
    width: '190px',
    height: '230px',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mppInfo: [],
      followingId: '',
      userId: ''
    }
  }
  getUserMpps = () => {
    axios.get('/api/userMpps')
      .then(res => {
        this.setState({
          mppInfo: res.data.followingId,
          userId: res.data._id
        })
      })
      .catch(err => console.log(err));
  }
  removeCard = key => {
    const removed = this.state.mppInfo.filter(mpp => mpp._id !== key)
    this.setState({
      mppInfo: removed
    })
  };
  componentDidMount() {
    this.getUserMpps();
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              {this.state.mppInfo.map(info =>
                <Grid sm={6} md={4} lg={3}  >
                  <Card className={classes.card} key={info._id}  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={info.photo}
                      title={info.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {info.name}
                      </Typography>
                      <Typography>
                        Riding: {info.currentRiding}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/mpp/${info.name}`}>
                        <Button size="small" color="primary">
                          Details
                        </Button>
                      </Link>
                      <UnFollowButton variant="contained" size="small" color="primary" className={classes.button}
                        followingId={info._id}
                        userId={this.state.userId}
                        removeCard={this.removeCard}
                      >
                      </UnFollowButton>
                    </CardActions>
                  </Card>

                </Grid>
              )}
            </Grid>

          </div>
        </main>
      </React.Fragment >
    );
  }
}

UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
  mppInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(UserPage);