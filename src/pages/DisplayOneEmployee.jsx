import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

const DisplayOneEmployee = props => {
  const [employeeData, setEmployeeData] = useState({})
  const getEmployeeData = async () => {
    const data = props.match.params.id
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/Pizza%20by%20the%20Slice/Employees/${data}`
    )
    console.log(resp.data)
    setEmployeeData(resp.data)
  }
  useEffect(() => {
    getEmployeeData()
  }, [])
  return (
    <>
      <h1 className="directory-title">Pizza by the Slice Employee</h1>
      <main className="employee-section"></main>
      <section className="employee-detail-section">
        <img src={`${employeeData.profileImage}`} alt="employee photo" />
        <section className="employee-detail-info">
          <h2>
            {employeeData.firstName} {employeeData.lastName}
          </h2>
          <h3>{employeeData.jobTitle}</h3>
          <div className="info">
            <p>Full Time:</p>
            {employeeData.fullTime}
          </div>
          <div className="info">
            <p>Hire Date:</p>
            {employeeData.hireDate}
          </div>
          <div className="info">
            <p>Date of Birth:</p>
            {employeeData.birthday &&
              moment(employeeData.birthday).format('MMM Do YYYY')}
          </div>
          <div className="info">
            <p>Phone Number:</p>
            {employeeData.phoneNumber}
          </div>
          <div className="info">
            <p>Address:</p>
            {employeeData.address}
          </div>
          <div className="info">
            {employeeData.city} {employeeData.state}
            {employeeData.zip}
          </div>
          <div className="info">
            <p>PTO:</p> {employeeData.ptoHours} hours
          </div>
          <div className="info">
            <p>Email Address: </p>
            {employeeData.email}
          </div>
          <div className="info">
            <p>Emergency Contact: </p>
            {employeeData.emergencyContactPerson}
          </div>
          <div className="info">
            <p>Emergency Contact Phone: </p>
            {employeeData.emergencyContactPhone}
          </div>
        </section>
      </section>
    </>
  )
}

export default DisplayOneEmployee
