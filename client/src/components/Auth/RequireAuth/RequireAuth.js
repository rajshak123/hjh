import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      

      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    
    return { auth: state.auth.authenticated };
  }

  ComposedComponent.propTypes = {
    auth: PropTypes.string,
    history:PropTypes.object
  };

  // ComposedComponent.propTypes{ 
  //   auth:PropTypes.string
  // };
  return connect(mapStateToProps)(ComposedComponent);
};
