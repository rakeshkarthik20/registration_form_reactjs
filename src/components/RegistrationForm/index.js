// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    firstErrorMsg: false,
    secondErrorMsg: false,
    successFullSubmission: false,
  }

  onBlurLastName = () => {
    const {secondName} = this.state
    if (secondName === '') {
      this.setState({secondErrorMsg: true})
    } else {
      this.setState({secondErrorMsg: false})
    }
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstErrorMsg: true})
    } else {
      this.setState({firstErrorMsg: false})
    }
  }

  onSubmittingForm = e => {
    e.preventDefault()
    const {secondName, firstName} = this.state
    console.log(secondName, firstName)
    if (firstName === '' && secondName === '') {
      this.setState({firstErrorMsg: true, secondErrorMsg: true})
    } else if (firstName === '') {
      this.setState({firstErrorMsg: true})
    } else if (secondName === '') {
      this.setState({secondErrorMsg: true})
    } else {
      this.setState({successFullSubmission: true})
    }
  }

  movetoPreviousPage = () => {
    this.setState({
      successFullSubmission: false,
      firstName: '',
      secondName: '',
      firstErrorMsg: false,
      secondErrorMsg: false,
    })
  }

  onChangeFirstName = e => {
    this.setState({firstName: e.target.value})
  }

  onChangeSecondName = e => {
    this.setState({secondName: e.target.value})
  }

  successFullPage = () => (
    <div className="successPage">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
      />
      <p className="successPageHeading">Submitted Successfully</p>
      <button
        type="button"
        className="submit-button submit-button2"
        onClick={this.movetoPreviousPage}
      >
        Submit Another Response
      </button>
    </div>
  )

  formContainer = () => {
    const {firstErrorMsg, secondErrorMsg, secondName, firstName} = this.state
    const firstInputError = firstErrorMsg ? 'error-input' : ''
    const secondInputError = secondErrorMsg ? 'error-input' : ''
    return (
      <form className="form-container" onSubmit={this.onSubmittingForm}>
        <div className="input-container">
          <label htmlFor="first" className="label">
            FIRST NAME
          </label>
          <br />
          <input
            className={`name-input ${firstInputError}`}
            id="first"
            type="text"
            placeholder="First name"
            onBlur={this.onBlurFirstName}
            onChange={this.onChangeFirstName}
            value={firstName}
          />
          {firstErrorMsg && <p className="error-msg">Required</p>}
        </div>
        <div className="input-container">
          <label htmlFor="second" className="label">
            LAST NAME
          </label>
          <br />
          <input
            className={`name-input ${secondInputError}`}
            id="second"
            type="text"
            placeholder="Last name"
            onBlur={this.onBlurLastName}
            onChange={this.onChangeSecondName}
            value={secondName}
          />
          {secondErrorMsg && <p className="error-msg">Required</p>}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {successFullSubmission} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Registration</h1>
        <div className="sub-container">
          {successFullSubmission
            ? this.successFullPage()
            : this.formContainer()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
