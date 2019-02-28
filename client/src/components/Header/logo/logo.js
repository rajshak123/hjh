import React, { Component , Fragment} from 'react';
import logoo from './subway-logo-sign-arrows.gif';
import styles from './logo.css';
import { Link } from 'react-router-dom';
export default class logo extends Component {
  render() {
    return (
      <Fragment >
        <Link  to='/'><img className={styles.logo} src={logoo}></img></Link>
        
      </Fragment>
    );
  }
}
