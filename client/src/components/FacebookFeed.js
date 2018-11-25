/* eslint-disable */
import React from 'react';
const FacebookFeed = props => (
  // <div className={props.className} style={
  //     {
  //         // maxHeight: "489px",
  //         // height:"75%",
  //         // height:"92%",
  //         overflow: 'scroll'
  //     }
  // }>
  // <iframe src='https://www.juicer.io/api/feeds/fordnationdougford-06e90b9f-02ac-4f83-acc8-f8c8113fec22/iframe' frameBorder='0' width='100%' height='2000px' style={{'display':'block','margin':'0 auto'}}></iframe>

  // </div>
  <div
    className="fb-page"
    data-href="https://www.facebook.com/CBCPolitics/"
    data-tabs="timeline"
    data-width="500"
    data-height="600"
    data-small-header="true"
    data-adapt-container-width="true"
    data-hide-cover="true"
    data-show-facepile="false"
  >
    <blockquote
      cite="https://www.facebook.com/CBCPolitics/"
      className="fb-xfbml-parse-ignore"
    >
      <a href="https://www.facebook.com/CBCPolitics/">CBC Politics</a>
    </blockquote>
  </div>
);
export default FacebookFeed;
