/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
    // button: {
    //     margin: theme.spacing.unit
    // },
});

const handleFollow = (event, props) => {
    event.preventDefault();
    console.log('follow key!!!')
    axios.put(`/api/following/${props.userId}&${props.followingId}`)
        .then(res => {
        })
        .catch(err => console.log(err));
}

const FollowButton = props => {
    return (
        <div>
            <Button variant="contained" color="primary" href="#contained-buttons"

                onClick={event => handleFollow(event, props)}
            >
                Follow +
        </Button>
        </div>
    );
}

FollowButton.propTypes = {
    userId: PropTypes.object.isRequired,
    followingId: PropTypes.object.isRequired
};

export default withStyles(styles)(FollowButton);
