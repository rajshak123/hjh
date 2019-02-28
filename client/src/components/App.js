import React, { Fragment}from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

const App = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};
App.propTypes = {
  children: PropTypes.any
};
export default App;
