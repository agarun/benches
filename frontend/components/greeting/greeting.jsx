import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h1>Welcome {currentUser.username}!</h1>
        <button onClick={logout}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/signup">Sign up</Link>
        &nbsp;
        <Link to="/login">Log in</Link>
      </div>
    );
  }
};

export default Greeting;
