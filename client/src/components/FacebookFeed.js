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

const defaultFb = 'https://www.facebook.com/CBCPolitics/';

const handleFacebookUrl = fb => {
  if (window.location.pathname === '/landing') {
    fb = defaultFb;
    console.log(fb);
  } else {
    fb = fb;
    console.log(fb);
  }
};

const FacebookFeed = ({ facebook }) => (
  // handleFacebookUrl(facebook),
  facebookPlug(document, 'script', 'facebook-jssdk'),
  (
    <div
      className="fb-page"
      data-href={defaultFb}
      data-tabs="timeline"
      data-width="500"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="true"
      data-show-facepile="false"
    >
      <blockquote cite={defaultFb} className="fb-xfbml-parse-ignore">
        <a href={defaultFb}>Politics</a>
      </blockquote>
    </div>
  )
);
export default FacebookFeed;
