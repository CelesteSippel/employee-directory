import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const AddEmployee = () => {
  const [resetForm, setResetForm] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hiredDate, setHiredDate] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [isFullTime, setIsFullTime] = useState(true)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [emergencyContactPerson, setEmergencyContactPerson] = useState('')
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [ptoHours, setPtoHours] = useState('')

  const submitData = async event => {
    event.preventDefault()

    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/Pizza%20by%20the%20Slice/Employees',
      {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        hiredDate: hiredDate,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        phoneNumber: phoneNumber,
        address: address,
        city: city,
        state: state,
        zip: zip,
        email: email,
        emergencyContactPerson: emergencyContactPerson,
        emergencyContactPhone: emergencyContactPhone,
        ptoHours: ptoHours,
        isFullTime: isFullTime,
        profileImage: profileImage,
      }
    )
    console.log(resp.data)
    setResetForm(true)
  }

  return (
    <div className="lower-section">
      <h1 className="form">Add Employee</h1>
      <main className="form-section">
        {resetForm && <Redirect to="/" />}
        <form
          onSubmit={e => {
            submitData(e)
            alert('Employee Added')
          }}
          className="add-employee-form"
        >
          <div className="form-style">
            <label htmlFor="first-name">First Name:</label>
            <input
              onChange={e => {
                setFirstName(e.target.value)
              }}
              value={firstName}
              type="text"
            />
          </div>
          <div className="form-style">
            <label htmlFor="last-name">Last Name:</label>
            <input
              onChange={e => {
                setLastName(e.target.value)
              }}
              value={lastName}
              type="text"
            />
          </div>
          <div className="form-style">
            <label htmlFor="birthday">Date of Birth:</label>
            <input
              onChange={e => {
                setBirthday(e.target.value)
              }}
              type="date"
              value={birthday}
            />
          </div>
          <div className="form-style">
            <label htmlFor="hired-date">Hired Date:</label>
            <input
              onChange={e => {
                setHiredDate(e.target.value)
              }}
              type="date"
              value={hiredDate}
            />
          </div>
          <div className="form-style">
            <label htmlFor="job-title">Job Title:</label>
            <input
              onChange={e => {
                setJobTitle(e.target.value)
              }}
              type="text"
              value={jobTitle}
            />
          </div>
          <div className="form-style">
            <label htmlFor="job-description">Job Description:</label>
            <input
              onChange={e => {
                setJobDescription(e.target.value)
              }}
              type="text"
              value={jobDescription}
            />
          </div>
          <div className="form-style">
            <label htmlFor="is-full-time">Full-Time:</label>
            <input
              onChange={e => {
                setIsFullTime(e.target.value)
              }}
              type="text"
              value={isFullTime}
            />
          </div>
          <div className="form-style">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              onChange={e => {
                setPhoneNumber(e.target.value)
              }}
              type="text"
              value={phoneNumber}
            />
          </div>
          <div className="form-style">
            <label htmlFor="email-address">email:</label>
            <input
              onChange={e => {
                setEmail(e.target.value)
              }}
              type="text"
              value={email}
            />
          </div>
          <div className="form-style">
            <label htmlFor="address">Address:</label>
            <input
              onChange={e => {
                setAddress(e.target.value)
              }}
              type="text"
              value={address}
            />
          </div>
          <div className="form-style">
            <label htmlFor="city">City:</label>
            <input
              onChange={e => {
                setCity(e.target.value)
              }}
              type="text"
              value={city}
            />
          </div>
          <div className="form-style">
            <label htmlFor="state">State:</label>
            <input
              onChange={e => {
                setState(e.target.value)
              }}
              type="text"
              value={state}
            />
          </div>
          <div className="form-style">
            <label htmlFor="zip">Zip:</label>
            <input
              onChange={e => {
                setZip(e.target.value)
              }}
              type="text"
              value={zip}
            />
          </div>
          <div className="form-style">
            <label htmlFor="emergency-contact-person">Emergency Contact:</label>
            <input
              onChange={e => {
                setEmergencyContactPerson(e.target.value)
              }}
              type="text"
              value={emergencyContactPerson}
            />
          </div>
          <div className="form-style">
            <label htmlFor="emergency-contact-phone">
              Emergency Contact Phone Number:
            </label>
            <input
              onChange={e => {
                setEmergencyContactPhone(e.target.value)
              }}
              type="text"
              value={emergencyContactPhone}
            />
          </div>
          <div className="form-style">
            <label htmlFor="profileImage">Profile Image:</label>
            <input
              onChange={e => {
                setProfileImage(e.target.value)
              }}
              type="text"
              value={profileImage}
            />
          </div>
          <div className="form-style">
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
      <footer>Made with 💛 at SDG</footer>
    </div>
  )
}

export default AddEmployee
