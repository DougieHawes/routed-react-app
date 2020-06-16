import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'

import Landing from './components/routes/Landing'
import Route1 from './components/routes/Route1'
import Route2 from './components/routes/Route2'
import Route3 from './components/routes/Route3'
import Route4 from './components/routes/Route4'

import './style.css'

const App = () =>
  <Router>
    <div className='app'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/route1' component={Route1} />
        <Route exact path='/route2' component={Route2} />
        <Route exact path='/route3' component={Route3} />
        <Route exact path='/route4' component={Route4} />
      </Switch>
    </div>
  </Router >

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
