// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showErrFirstname: false,
    showErrLastname: false,
    showFormDetails: true,
  }

  resetFormDetails = () => {
    this.setState({
      firstName: '',
      lastName: '',
      showErrFirstname: false,
      showErrLastname: false,
      showFormDetails: true,
    })
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({showErrFirstname: true})
    } else {
      this.setState({showErrFirstname: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({showErrLastname: true})
    } else {
      this.setState({showErrLastname: false})
    }
  }

  submitRegistrationForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.onBlurFirstName()
      this.onBlurLastName()
    } else if (firstName === '') {
      this.onBlurFirstName()
    } else if (lastName === '') {
      this.onBlurLastName()
    } else {
      this.setState({showFormDetails: false})
    }
  }

  onSuccessfulFormSubmission = () => (
    <div className="successful-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="success-msg">Submitted Successfully</p>
      <button
        onClick={this.resetFormDetails}
        className="submit-button"
        type="button"
      >
        Submit Another Response
      </button>
    </div>
  )

  renderFormDetails = () => {
    const {firstName, lastName, showErrFirstname, showErrLastname} = this.state
    const isActiveFirstName = showErrFirstname ? 'input-err-text' : ''
    const isActiveLastName = showErrLastname ? 'input-err-text' : ''

    return (
      <form className="form-container" onSubmit={this.submitRegistrationForm}>
        <div className="input-container">
          <label className="input-label-element" htmlFor="firstName">
            FIRST NAME
          </label>
          <br />
          <input
            className={`input-text ${isActiveFirstName}`}
            type="text"
            placeholder="First name"
            id="firstName"
            value={firstName}
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
          {showErrFirstname && <p className="blur-msg">Required</p>}
        </div>
        <div className="input-container">
          <label className="input-label-element" htmlFor="lastName">
            LAST NAME
          </label>
          <br />
          <input
            className={`input-text ${isActiveLastName}`}
            type="text"
            placeholder="Last name"
            id="lastName"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
          {showErrLastname && <p className="blur-msg">Required</p>}
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {showFormDetails} = this.state

    return (
      <div className="bg-container">
        <div className="registration-form-container">
          <h1 className="form-heading">Registration</h1>
          {showFormDetails && this.renderFormDetails()}
          {!showFormDetails && this.onSuccessfulFormSubmission()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
