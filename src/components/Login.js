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
      <div id="contactPage">
        <div id="loginDiv">
          <h1>Login</h1>
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
      </div>
    )
  }
}
export default Login
