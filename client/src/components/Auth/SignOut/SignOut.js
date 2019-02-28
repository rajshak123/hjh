import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '@actions';
import PropTypes from 'prop-types';
import styles from './SignOut.css';
class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <div className={styles.form}>Sorry to see you go</div>;
  }
}
Signout.propTypes = {
  signout: PropTypes.func
};
export default connect(null, actions)(Signout);
