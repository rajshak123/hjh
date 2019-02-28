import React, { Component } from 'react';
import styles from './Landingpage.css';
// import Header from '../Header';
export default class LandingPage extends Component {
  render() {
    return (
      <div className={styles.landingPage}>
        
        <div className={styles.heading}>
          <h1 >Your preperation begins with our preperation.</h1>
          <h2 >We will be soon starting the test series.</h2>
        </div>
      </div>
    );
  }
}
