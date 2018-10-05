/* eslint-disable */
import React from 'react';
const TwitterFeed = (props) => (
    <div className={props.className} style={
        {
            height: "200px"
        }
    }>
        <a class="twitter-timeline" href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
)

export default TwitterFeed; 