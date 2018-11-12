/* eslint-disable */

import React from 'react';
import TwitterFeed from './TwitterFeed';
import FacebookFeed from './FacebookFeed';

const styles = {
  layout: {
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll'
  }
};

const SocialFeed = ({ twitter, facebook }) => (
  <article
    id=""
    style={styles.layout}
    className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"
  >
    <div className="tc">
      {/* <h1 className="f4">Twitter Feed</h1> */}
      <hr className="mw3 bb bw1 b--black-10" />
    </div>
    <div className="lh-copy measure center f6 black-70">
      {/* <TwitterFeed twitter={twitter} /> */}
      <FacebookFeed facebook={facebook} />
    </div>
  </article>
);

export default SocialFeed;
