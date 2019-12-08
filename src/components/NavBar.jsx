import React from 'react'
import { Link } from 'react-router-dom'
import top from '../images/top.png'
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        {' '}
        <img src={top} />
      </Link>
      <section>
        <h1 className="company-name">Pizza by the Slice</h1>
      </section>
      <section className="menu">
        <Link to="/">
          <section className="nav-link">All Employees</section>
        </Link>
        <Link to="/add/employee">
          <section className="nav-link">Add Employee</section>
        </Link>
      </section>
    </nav>
  )
}

export default NavBar
