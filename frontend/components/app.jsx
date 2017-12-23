import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import BenchIndexContainer from './benches/bench_index_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Benchbnb</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/" component={BenchIndexContainer} />
  </div>
);

export default App;
