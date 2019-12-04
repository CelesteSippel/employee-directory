import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import AddEmployee from './pages/AddEmployee'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header></header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/add/employee" component={AddEmployee}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
