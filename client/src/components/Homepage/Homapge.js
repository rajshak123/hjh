import React, { Component } from 'react';
import styles from './Homepage.css';
import { getProduct } from '@apis/api';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Homapge extends Component {
  
  componentDidUpdate() {
    if (!this.props.auth) {
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    
    if (!this.props.auth) {
      this.props.history.push('/');
    }
    else {
      getProduct().then(res => {
        console.log(res);
      }).catch(er => {
        console.log(er);
      });
    }
  }
  render() {
    return (
      <div className={styles.top}>
        <h1>Homapge</h1>
      </div>
    );
  }
}

Homapge.propTypes = {
  auth: PropTypes.string,
  history: PropTypes.object,
  // errorMessage:PropTypes.string
};

function mapStateToProps(state) {
    
  return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps)(Homapge);
