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

const Mppinfo = ({ photo, name, position, number }) => (
  <div className="container center" style={styles.layout}>
    <article style={styles.fixedHeight} className="mw5 bg-white pa3 pa4-ns ba b--black-10">
      <div className="tc">
        <img src={photo} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="selected MPP" />
        <h1 className="f3 mb2">{name}</h1>
        <h2 className="f5 fw4 gray mt0">Position: {position}</h2>
      </div>
    </article>

    <article style={styles.fixedHeight} className="hidden ba b--black-10 w-60">
      <h1 className="f4 bg-near-white br--top black-60 mv0 pv2 ph3">Information on {name}</h1>
      <div className="pa3 bt b--black-10">
        <p>
          Name:
          <strong>{name}</strong>
        </p>
        <p>
          Current Position:
          <strong>{position}</strong>
        </p>
        <p>
          Contact number:
          <strong>{number}</strong>
        </p>
      </div>
    </article>
  </div>
);

export default Mppinfo;

// commit me
