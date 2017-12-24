import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import SearchContainer from './search/search_container';
import BenchFormContainer from './bench_form/bench_form_container';
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
    <Route exact path="/" component={SearchContainer} />
    <Route exact path="/benches/new" component={BenchFormContainer} />
  </div>
);

export default App;
