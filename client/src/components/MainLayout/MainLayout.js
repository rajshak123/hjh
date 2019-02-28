import React, { Component } from 'react';
import styles from './MainLayout.css';
// import classNames from 'classnames';
import LandingPage from '@components/LandingPage';
import Content from '@components/content';
import Footer from '@components/footer';
// const st = classNames(styles.font, styles.font1 );

export default class MainLayout extends Component {
  render() {
    return (
      <div className={styles.App}>
        <LandingPage />
        <Content />
        <Footer/>
      </div>
    );
  }
}

