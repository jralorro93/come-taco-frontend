import React, { Component } from 'react'

class SignupForm extends Component {

  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: ""
  }

  handleChange = (event) => {
    console.log('this is event.target.value', event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    return (
      <div id="contactPage">
        <div id="signupForm">
          <h2>Come Join Us!</h2>
          <form onSubmit={(e) => {this.props.handleSignup(e, this.state)}} >
            <label htmlFor="email">Email: </label>
            <input onChange={this.handleChange} name="email" value={this.state.email} type="email" placeholder="example@gmail.com"></input>
            <br/>
            <label htmlFor="firstName">First Name: </label>
            <input onChange={this.handleChange} name="firstName" value={this.state.firstName} type="text" placeholder="First Name"></input>
            <br/>
            <label htmlFor="lastName">Last Name: </label>
            <input onChange={this.handleChange} name="lastName" value={this.state.lastName} type="text" placeholder="Last Name"></input>
            <br/>
            <label htmlFor="password">Password: </label>
            <input onChange={this.handleChange} name="password" value={this.state.password} type="password" ></input>
            <br/>
            <input type="submit" value="Sign Up"/>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm
