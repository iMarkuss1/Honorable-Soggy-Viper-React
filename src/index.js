import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Exploit from './views/exploit'
import Contact from './views/contact'
import Verify from './views/verify'
import Calculator from './views/calculator'
import FA from './views/fa'
import Home from './views/home'
import Log from './views/log'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Exploit} exact path="/exploit" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Verify} exact path="/verify" />
        <Route component={Calculator} exact path="/calculator" />
        <Route component={FA} exact path="/fa" />
        <Route component={Home} exact path="/" />
        <Route component={Log} exact path="/log" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
