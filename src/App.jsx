import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import AddEmployee from './pages/AddEmployee'

import NotFound from './pages/NotFound'
import AllEmployees from './pages/AllEmployees'

const App = () => {
  return (
    <Router>
      <header></header>
      <Switch>
        <Route exact path="/" component={AllEmployees}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/add/employee" component={AddEmployee}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
