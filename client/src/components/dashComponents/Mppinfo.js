/* eslint-disable */
import React from 'react';
// next - card
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// -next paper
import Paper from '@material-ui/core/Paper';
// next - Expansion
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//

// import component
import FollowButton from './FollowButton';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fixedHeight: {
    height: '280px'
  },
  card: {
    maxWidth: 345
  },
  media: {
    width: '250px',
    height: '300px'
  },
  mppContainer: {
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  expender: {
    width: '100%'
  }
});

const Mppinfo = ({
  followingId,
  photo,
  name,
  position,
  telephone,
  currentRiding,
  party,
  parliamentNumber,
  classes,
  userId,
  ridingMap
}) => {
  // const { classes } = this.props;
  return (
    <div className={classes.mppContainer} style={styles.layout}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={photo}
            title={name}
            key={followingId}
          />
        </CardActionArea>
        {/* <CardActions> */}
        {/* <FollowButton userId={userId} followingId={followingId} /> */}
        {/* </CardActions> */}
      </Card>
      {/* // */}
      <Paper className={classes.root} elevation={1}>
        {/* <Typography variant="h5" component="h3">
          {name}
        </Typography> */}
        <div>
          <ExpansionPanel className={classes.expender}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                className={classes.heading}
                variant="h5"
                component="h3"
              >
                {name}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <CardMedia
                className={classes.media}
                image={ridingMap}
                title={name}
                key={followingId}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <hr />
        <Typography component="p">Career: {parliamentNumber}</Typography>
        <Typography component="p">
          Position(s):
          <ul>
            {position.map((jobs, i) => (
              <ol key={i}>{jobs}</ol>
            ))}
          </ul>
        </Typography>
        <Typography component="p">Party: {party}</Typography>
        <Typography component="p">{telephone}</Typography>
        <Typography component="p">{currentRiding}</Typography>
        {/*  */}
        <FollowButton userId={userId} followingId={followingId} />
      </Paper>
    </div>
  );
};

Mppinfo.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Mppinfo);
