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
        <a className="twitter-timeline" href="https://twitter.com/chancetherapper?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Tweets by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
)

export default TwitterFeed;

