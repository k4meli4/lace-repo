import React from 'react';

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixedHeight: {
    height: '280px',
  },

};

const Mppinfo = props => (

  <div className="container center" style={styles.layout}>
    <article style={styles.fixedHeight} className="mw5 bg-white pa3 pa4-ns ba b--black-10">
      <div className="tc">
        <img
          src={props.picture}
          className="br-100 h4 w4 dib ba b--black-05 pa2"
          alt="selected MPP"
        />
        <h1 className="f3 mb2">{props.name}</h1>
        <h2 className="f5 fw4 gray mt0">Position: something</h2>
      </div>
    </article>

    <article style={styles.fixedHeight} className="hidden ba b--black-10 w-60">
      <h1 className="f4 bg-near-white br--top black-60 mv0 pv2 ph3">Information on {props.name}</h1>
      <div className="pa3 bt b--black-10">
        <p>Name:<strong>{props.name}</strong> </p>
        <p>Current Position:<strong>{props.position}</strong> </p>
        <p>Contact number:<strong>{props.number}</strong> </p>
        <p />
        <h3 />
        <h3 />
      </div>
    </article>

  </div>
);

export default Mppinfo;

// commit me