import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllEmployees = () => {
  const [employeeData, setEmployeeData] = useState([])

  const getEmployeeData = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Pizza%20by%20the%20Slice/Employees'
    )
    console.log(resp.data)
    setEmployeeData(resp.data)
  }

  console.log(employeeData)

  useEffect(() => {
    getEmployeeData()
  }, [])

  return (
    <>
      <h1 className="directory-title">Pizza by the Slice</h1>
      <main className="employee-database">
        {employeeData.map((item, i) => {
          return (
            <Link
              to={{
                pathname: `/${item.id}`,
                state: { item },
              }}
            >
              {' '}
              <section className="employee-card" key={i}>
                <img src={item.profileImage} alt="Pizza Man" />
                <section className="employee-info">
                  <h2 className="first-last-name">
                    {' '}
                    {item.firstName} {item.lastName}
                  </h2>
                  <h3 className="job-title">{item.jobTitle}</h3>
                  <h3 className="job-status">
                    Full Time: {item.isFullTime ? 'Yes' : 'No'}
                  </h3>
                  <h3></h3>
                </section>
              </section>
            </Link>
          )
        })}
      </main>
    </>
  )
}

export default AllEmployees
