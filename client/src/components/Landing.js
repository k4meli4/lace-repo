/* eslint-disable */
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Footer from './Footer';
import TwitterFeed from './TwitterFeed';
import FacebookFeed from './FacebookFeed';
import './Landing.css';
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
  
    return t;
  }(document, "script", "twitter-wjs"));

class Landing extends Component {
    
    state = {
        TwitterClass: '',
        FacebookClass: 'notShown'
    };

    FacebookButton = (e) => {
        e.preventDefault();
        console.log("facebook buttonnnnnnn")
        this.setState({
            TwitterClass: 'notShown',
            FacebookClass: ''
        })
        
    }
    TwitterButton = (e) => {
        e.preventDefault();
        console.log("twitter buttonnnnnnn")
        this.setState({
            TwitterClass: '',
            FacebookClass: 'notShown'
        })
    }

    render() {
        return (
            <div>
                <div
                    className="feeds"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        justifyItems: 'center',
                        padding: '0px',
                        width: '100%',
                    }}>
                    <div style={{ width: "100%"}}>
                        <TwitterFeed className={this.state.TwitterClass}/>
                        <FacebookFeed className={this.state.FacebookClass}/>
                        <div className="btn-group" style={{ width: "100%", borderStyle: "solid" }}>
                            <button style={{ width: "50%" }} onClick = {this.TwitterButton}>Twitter</button>
                            <button style={{ width: "50%" }} onClick = {this.FacebookButton}>Facebook</button>
                        </div>

                    </div>
                </div>
                <div className="postalCodeSearch" style={{marginTop: "0px", marginBottom: "0px", height: "150px", backgroundColor: 'blue'}}>
                    <h3>Not Sure who your MPP is?</h3>
                    <input id="search" type="search" placeholder="search politicans"></input>
                    <button>
                        <i className="fa fa-search"></i>
                    </button> 
                </div>
                <div className='' style={{width: '100%', display: '-webkit-box', height: '365px', marginBottom: '0px'}}>
                    <div className='legislatureToday' style={{width: '50%', height: '100%',backgroundColor: 'red', }}>
                        <h2>Legislature Today</h2>
                    </div>
                    <div className="billsToday" style={{width: '50%', height: '100%', backgroundColor: 'orange'}}>
                        <h2>Bills Today</h2>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Landing;
