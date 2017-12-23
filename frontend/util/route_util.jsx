import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, isLoggedIn }) => (
  <Route path={path} render={props => (
    isLoggedIn ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    )
  )} />
);

const Protected = ({ component: Component, path, isLoggedIn }) => (
  <Route path={path} render={props => (
    isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = state => ({
  isLoggedIn: !!state.session.currentUser
});

export const AuthRoute = withRouter(
  connect(
    mapStateToProps
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps
  )(Protected)
);
