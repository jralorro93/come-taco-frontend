import React, { Component } from 'react'

class SignupForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">Email: </label>
          <input name="email" type="email" placeholder="example@gmail.com"></input>
          <br/>
          <label htmlFor="firstName">First Name: </label>
          <input name="firstName" type="text" placeholder="First Name"></input>
          <br/>
          <label htmlFor="lastName">Last Name: </label>
          <input name="lastName" type="text" placeholder="Last Name"></input>
          <br/>
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" ></input>
          <br/>
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    )
  }
}

export default SignupForm