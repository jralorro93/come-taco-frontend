import React, { Component } from 'react'

class Login extends Component {

  state = {
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={(e) => {this.props.handleLogin(e, this.state)}}>
          <label>Email:</label>
          <input type="email" name='email' placeholder='Email@test.com' value={this.state.email} onChange={this.handleChange}/>
          <br/>
          <label>Password:</label>
          <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
          <br/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    )
  }
}
export default Login
