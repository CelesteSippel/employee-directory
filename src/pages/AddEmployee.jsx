import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddEmployee = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hireDate, setHireDate] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [interestingFact, setInterestingFact] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [salary, setSalary] = useState('')
  const [ptoHours, setPtoHours] = useState('')

  const submitData = async event => {
    event.preventDefault()

    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/Pizza%20by%20the%20Slice/Employees',
      {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        hiredDate: hireDate,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        interestingFact: interestingFact,
        address: address,
        city: city,
        state: state,
        zip: zip,
        salary: salary,
        ptoHours: ptoHours,
      }
    )
    console.log(resp.data)
  }

  return (
    <div>
      <h1 className="form">Add Employee</h1>
      <main className="form-section">
        <form onSubmit={submitData} className="add-employee-form">
          <div>
            <label htmlFor="first-name">First Name:</label>
            <input
              onChange={e => {
                setFirstName(e.target.value)
              }}
              value={firstName}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name:</label>
            <input
              onChange={e => {
                setLastName(e.target.value)
              }}
              value={lastName}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="birthday">Date of Birth:</label>
            <input
              onChange={e => {
                setBirthday(e.target.value)
              }}
              type="date"
              value={birthday}
            />
          </div>
          <div>
            <label htmlFor="hired-date">Hire Date:</label>
            <input
              onChange={e => {
                setHireDate(e.target.value)
              }}
              type="date"
              value={hireDate}
            />
          </div>
          <div>
            <label htmlFor="job-title">Job Title:</label>
            <input
              onChange={e => {
                setJobTitle(e.target.value)
              }}
              type="text"
              value={jobTitle}
            />
          </div>
          <div>
            <label htmlFor="job-description">Job Description:</label>
            <input
              onChange={e => {
                setJobDescription(e.target.value)
              }}
              type="text"
              value={jobDescription}
            />
          </div>
          <div>
            <label htmlFor="interesting-fact">Interesting Fact:</label>
            <input
              onChange={e => {
                setInterestingFact(e.target.value)
              }}
              type="text"
              value={interestingFact}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              onChange={e => {
                setAddress(e.target.value)
              }}
              type="text"
              value={address}
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              onChange={e => {
                setCity(e.target.value)
              }}
              type="text"
              value={city}
            />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input
              onChange={e => {
                setState(e.target.value)
              }}
              type="text"
              value={state}
            />
          </div>
          <div>
            <label htmlFor="zip">Zip:</label>
            <input
              onChange={e => {
                setZip(e.target.value)
              }}
              type="text"
              value={zip}
            />
          </div>
          <div>
            <label htmlFor="salary">Salary:</label>
            <input
              onChange={e => {
                setSalary(e.target.value)
              }}
              type="text"
              value={salary}
            />
          </div>
          <div>
            <label htmlFor="pto">PTO:</label>
            <input
              onChange={e => {
                setPtoHours(e.target.value)
              }}
              type="text"
              value={ptoHours}
            />
          </div>
          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default AddEmployee
