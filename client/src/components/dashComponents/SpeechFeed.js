/* eslint-disable */
import React, { Component } from 'react';

const styles = {};

styles.rightA = {
  marginRight: '0px',
};

// const vote(){
//   let voteList = this.props.votes;
//   votes.forEach(element => {
//     console.log(element.speech);
//     <p className="f6 f5-ns lh-copy measure">{element.speech}</p>
//   });
// }

const SpeechFeed = (props) => (
  <article style={props.customStyle} className="center  br3 hidden ba b--black-10 mv4 w-90">
    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Speech Feed</h1>
    <div className="pa3 bt b--black-10">
    {props.votes.forEach(element => {
    console.log(element.speech);
    <p className="f6 f5-ns lh-copy measure">{element.speech}</p>
    })}
    </div>
  </article>
);


export default SpeechFeed;
