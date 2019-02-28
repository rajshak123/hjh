import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '@actions';
import * as Yup from 'yup';
import { Form, Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import styles from './SignIn.css';


class SignIn extends Component {
  form = ({ errors, touched, handleSubmit, isSubmitting }) => { 
    let err = () => {
      if (this.props.errorMessage) {
        isSubmitting = false;
        return (<h1>Invalid Credentials</h1>);
      }
    };
    return (
      <Form className={styles.form} onSubmit={handleSubmit}>
        <div>{err()}</div>
        <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field type='email' name='email' placeholder='Email'  />
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type='password' name='password' placeholder='Password' />
        </div>
      
        <button disabled={isSubmitting} type='submit'>Submit</button>
      </Form>
    );
  }
  render() {
  
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => { 
          try {
            this.props.signin(values).then(() => {
              this.props.history.push('/feature');
            }).catch(() => { 
              console.log('Error while Logging');
            });
            // this.props.signin(values, () => {
            //   this.props.history.push('/feature');
            // });
          }
          catch(errors){ 
            console.log(errors);
          }
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Email not valid').required('Email is required'),
          password: Yup.string().min(9, 'Password must 9 char long').required('Password required')
        })}
        component={this.form}>
        
      </Formik>
    );
  }
}

const initialValues = {
  email: 'Your email goes here',
  password: 'Your password goes here'
};


SignIn.propTypes = {
  signin: PropTypes.func,
  history: PropTypes.object,
  errorMessage:PropTypes.string
};


function mapStateToProps(state) { 
  
  return {
    errorMessage: state.auth.errorMessage
  };
}

export default compose(
  connect(mapStateToProps, actions)
)(SignIn);





