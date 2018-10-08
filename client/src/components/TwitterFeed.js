/* eslint-disable */
import React from 'react';
import './TwitterStyle.css'
const TwitterFeed = (props) => (
    <div className={props.className} style={
        {
            maxHeight: "200px",
            overflow: 'scroll'
        }
    }>
        <a class="twitter-timeline" href="https://twitter.com/andretqt/lists/project">Tweets by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
)

export default TwitterFeed;

