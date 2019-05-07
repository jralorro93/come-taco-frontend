import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CategoryList from "./containers/CategoryList";
import NavBar from "./components/NavBar";
import "./App.css";
import FoodContainer from './containers/FoodContainer'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import SignupForm from './components/SignupForm'

export default class App extends React.Component {

  // we need this to filter by categoryChoice
  // send this to FoodContainer
  state = {
    categoryChoice: "",
    currentUser: null
  }

  // handles click to change categoryChoice by sending this function
  // down to CategoryList and down to a specific Category
  handleCategoryClick = (event) => {
    this.setState({
      categoryChoice: event.target.innerText.toLowerCase()
    })
  }

  handleSignup = (e, userObj) => {
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: userObj.email,
        password: userObj.password,
        first_name: userObj.firstName,
        last_name: userObj.lastName
      })
    })
  }

  handleLogin = (e, userObj) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: userObj.email,
        password: userObj.password
      })
    })
      .then(res => res.json())
      .then(user => console.log(user))
  }



  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {/* Route to Menu page */}
          <Route path='/' exact render={
            () => {
              return(
                <div className="menu">
                  <CategoryList handleCategoryClick={this.handleCategoryClick}/>
                  <FoodContainer categoryChoice={this.state.categoryChoice}/>
                </div>
              )
            }
          }
          />
          {/* Route to About page */}
          <Route exact path='/about' render={About}/>
          {/* Route to Contact page */}
          <Route exact path='/contact' render={Contact}/>
          {/* Route to Login page */}
          <Route exact path='/login' render={
            () => {
              return (
                <Login handleLogin={this.handleLogin}/>
              )
            }
              } />
          {/* Route to Signup page */}
          <Route exact path='/signup' render={
            () => {
              return(
                <SignupForm handleSignup={this.handleSignup}/>
              )
            }
          } />
        </div>
      </Router>
    );
  }
}





// Notes
