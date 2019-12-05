import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DisplayOneEmployee from './pages/DisplayOneEmployee'
import AddEmployee from './pages/AddEmployee'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'
import AllEmployees from './pages/AllEmployees'

const App = () => {
  return (
    <Router>
      <NavBar />
      <header></header>
      <Switch>
        <Route exact path="/" component={AllEmployees}></Route>
        <Route exact path="/:id" component={DisplayOneEmployee}></Route>
        <Route exact path="/add/employee" component={AddEmployee}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
