import React from 'react';

const SocialFeed = (props) => (
  <article id="" className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
    <div className="tc">
      {/* <h1 className="f4">Social Feed</h1>
      <hr className="mw3 bb bw1 b--black-10" /> */}
    </div>
    <a class="twitter-timeline" href={props.twitter}>Tweets by Doug Ford</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </article>
);

export default SocialFeed;
