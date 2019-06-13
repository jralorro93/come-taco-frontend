import React from "react";
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";

import CategoryList from "./containers/CategoryList";
import NavBar from "./components/NavBar";
import "./App.css";
import FoodContainer from './containers/FoodContainer'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import SignupForm from './components/SignupForm'
import ShoppingCart from './components/ShoppingCart'

class App extends React.Component {

  // we need this to filter by categoryChoice
  // send this to FoodContainer
  state = {
    categoryChoice: "",
    currentUser: null,
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
      .then(user => {
        localStorage.setItem('token', user.jwt)
        this.setState({
          currentUser: user.user
        }, () => this.props.history.push('/about'))
      })
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      currentUser: null
    })
  }

  componentDidMount() {
    if (this.state.currentUser === null && localStorage.getItem('token') !== null) {
      fetch('http://localhost:3000/api/v1/profile', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => res.json())
        .then(user => {
          this.setState({
            currentUser: user
          })
        })
    }
  }

  handleAddToCart = (event, foodObj) => {
    // console.log(this.state.currentUser.user.id, foodObj.id)
    fetch("http://localhost:3000/api/v1/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.currentUser.user.id,
        item_id: foodObj.id
      })
    })
  }

  render() {
    return (
      <Switch>
        <div className="App">
          <NavBar handleLogout={this.handleLogout} currentUser={this.state.currentUser}/>
          {/* Route to Menu page */}
          <Route exact path='/' render={
            () => {
              return(
                <div className="menu">
                  <CategoryList handleCategoryClick={this.handleCategoryClick}/>
                  <FoodContainer handleAddToCart={this.handleAddToCart} categoryChoice={this.state.categoryChoice}/>
                </div>
              )
            }
          }
          />
          {/* Route to About page */}
          <Route path='/about' render={About}/>
          {/* Route to Contact page */}
          <Route path='/contact' render={Contact}/>
          {/* Route to Login page */}
          <Route path='/login' render={
            () => {
              return (
                <Login handleLogin={this.handleLogin}/>
              )
            }
              } />
          {/* Route to Signup page */}
          <Route path='/signup' render={
            () => {
              return(
                <SignupForm handleSignup={this.handleSignup}/>
              )
            }
          } />
          {/* Route to ShoppingCart page */}
          <Route path='/shoppingcart' render={
            () => {
              return (
                <ShoppingCart currentUser={this.state.currentUser}/>
              )
            }
          } />
        </div>
      </Switch>
    );
  }
}

export default withRouter(App);



// Notes
