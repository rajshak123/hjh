import React, { Component } from 'react';
import styles from './Header.css';
import Logo from '@components/Header/logo';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className={styles.button}>
          <Link className={styles.square_btn} to='/signout'>SignOut</Link>
          <Link className={styles.square_btn} to='/feature'>Feature</Link>
        </div>
      );
    } else {
      return (
        <div className={styles.button}>
          <Link className={styles.square_btn} to='/signin'>SignIn</Link>
          <Link className={styles.square_btn} to='/signup'>SignUp</Link>
        </div>
      );
    }
  }


  render() {
    return (
      <div className={styles.header} >
        <Logo />
        {this.renderLinks()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  
  return { authenticated: state.auth.authenticated };
}
Header.propTypes = {
  authenticated: PropTypes.string
};
export default connect(mapStateToProps)(Header) ;
