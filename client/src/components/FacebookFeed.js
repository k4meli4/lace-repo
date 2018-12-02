/* eslint-disable */
import React from 'react';
const facebookPlug = (d, s, id) => {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
  fjs.parentNode.insertBefore(js, fjs);
};

const FacebookFeed = props => (
  facebookPlug(document, 'script', 'facebook-jssdk'),
  (
    <div
      class="fb-page"
      data-href="https://www.facebook.com/CBCPolitics/"
      data-tabs="timeline"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="true"
      data-show-facepile="false"
    >
      <blockquote
        cite="https://www.facebook.com/CBCPolitics/"
        class="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/CBCPolitics/">CBC Politics</a>
      </blockquote>
    </div>
  )
);
export default FacebookFeed;
