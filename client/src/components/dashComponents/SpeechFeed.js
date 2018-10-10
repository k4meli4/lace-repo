import React, { Component } from 'react';

const styles = {};

styles.rightA = {
  marginRight: '0px',
};

class SpeechFeed extends Component {
  // const SpeechFeed = ({ customStyle, props }) => (

  render(){
    return(
    <article style={this.props.customStyle} className="center  br3 hidden ba b--black-10 mv4 w-90">
      <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Speech Feed</h1>
      <div className="pa3 bt b--black-10">
        <p className="f6 f5-ns lh-copy measure" >
          {this.props.speech}
        </p>
      </div>
    </article>
    )
  }
  // );

}

export default SpeechFeed;
