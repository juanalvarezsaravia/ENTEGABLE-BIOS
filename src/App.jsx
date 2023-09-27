import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import Results from './components/Results';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/results" component={Results} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
