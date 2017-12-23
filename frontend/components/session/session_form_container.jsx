import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: !!state.session.currentUser,
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const formTypeAction = (
    formType === 'login' ?
    login :
    signup
  );
  return ({
    processForm: user => dispatch(formTypeAction(user)),
    formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
