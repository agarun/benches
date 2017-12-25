import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import SearchContainer from './search/search_container';
import BenchFormContainer from './bench_form/bench_form_container';
import BenchShowContainer from './bench_show/bench_show_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Benchbnb</h1>
      <GreetingContainer />
    </header>

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={SearchContainer} />
      <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
      {/* TODO: The review form currently exists on the bench show page,
      but the form *display* should be protected. Solution: move to
      its own page. */}
      <Route exact path="/benches/:benchId" component={BenchShowContainer} />
    </Switch>
  </div>
);

export default App;
