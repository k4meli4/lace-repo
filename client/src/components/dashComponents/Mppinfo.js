/* eslint-disable */
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

const Mppinfo = ({ lastName, followingId, photo, name, position, telephone, currentRiding, party, parliamentNumber }) => (
  <div className="container center" style={styles.layout}>
    <article style={styles.fixedHeight} className="mw5 bg-white pa3 pa4-ns ba b--black-10">
      <div className="tc">
        <img src={photo} key= {followingId} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="selected MPP" />
        <h4 className="f4 mb2">{name}</h4>
        <h3 className="f5 fw4 gray mt0">
       <strong>Current Riding:</strong>  
         <p> {currentRiding} </p>
        </h3>
      </div>
    </article>

    <article style={styles.fixedHeight} className="hidden ba b--black-10 w-60">
      <h1 className="f4 bg-near-white br--top black-60 mv0 pv2 ph3"> <strong>{name}</strong></h1>
      <div className="pa3 bt b--black-10">
        <p><strong>Career:</strong> {parliamentNumber}</p>
        <strong> Position(s)</strong>
          <ul>
            {position.map((jobs, i) =>
              <ol key={i}>
                {jobs}
              </ol>
            )}
          </ul>
        <p><strong> Party:</strong> {party} </p>

        <p>{telephone} </p>

      </div>
    </article>
  </div>
);

export default Mppinfo;
