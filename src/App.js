import React from "react";
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import {StripeProvider} from 'react-stripe-elements';

//Imports from Components
import CategoryList from "./containers/CategoryList";
import NavBar from "./components/NavBar";
import "./App.css";
import HomePage from './containers/HomePage'
import FoodContainer from './containers/FoodContainer2'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import SignupForm from './components/SignupForm'
import ShoppingCart from './components/ShoppingCart'
import Checkout from './components/Checkout'
import handleGrandTotal from './utils/Checkout/handleGrandTotal'
import SideDrawer from "./components/SideDrawer";

//Imports from MUI
import CssBaseline from '@material-ui/core/CssBaseline'


class App extends React.Component {

  state = {
    categoryChoice: "",
    currentUser: null,
    shoppingCart: []
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
      .then(res => res.json())
      .then(user => {
        localStorage.setItem('token', user.jwt)
        this.setState({
          currentUser: user.user
        }, () => this.props.history.push('/'))
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
        }, () => this.props.history.push('/'))
      }) }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      currentUser: null
    })
  }

  handleDelete = (id, foodObj) => {
    fetch(`http://localhost:3000/api/v1/orders/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `BEARER ${localStorage.getItem('token')}`
      }
    }).then((response) => {
          console.log('this is id: ', id)
          
          let newShoppingCart = [...this.state.shoppingCart]
          let index = newShoppingCart.indexOf(foodObj)
          newShoppingCart.splice(index, 1)
          this.setState({
            shoppingCart: newShoppingCart
          })
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
    if (this.state.currentUser === null && localStorage.getItem('token') !== null) {
      fetch("http://localhost:3000/api/v1/get_items", {
        headers: {
          'Authorization': `BEARER ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(parsedJSON => {
          this.setState({
            shoppingCart: parsedJSON.user.items
          })
        })
      }
  }

  render() {
    return (
        <StripeProvider apiKey='pk_test_OHsp793zkjWWR6rFPeVnf7nR00uGTVDgXk'>
          <Switch>
            <div>
              <CssBaseline/>
              <SideDrawer handleLogout={this.handleLogout} currentUser={this.state.currentUser}/>
              <div className='App'>
                {/* Route to Menu page */}
                <Route exact path='/' render={HomePage}/>
                <Route exact path='/menu' render={
                  () => {
                    return (
                      <div>
                        <CategoryList handleCategoryClick={this.handleCategoryClick}/>
                        <FoodContainer currentUser={this.state.currentUser} categoryChoice={this.state.categoryChoice}/>
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
                      <ShoppingCart currentUser={this.state.currentUser} shoppingCart={this.state.shoppingCart} handleDelete={this.handleDelete} history={this.props.history}/>
                    )
                  }
                } />
              {/* Route to Checkout page*/}
                <Route path='/checkout' render={
                  () => {
                    return (
                      <Checkout currentUser={this.state.currentUser} shoppingCart={this.state.shoppingCart}/>
                    )
                  }
                }/>
              </div>
            </div>
          </Switch>
        </StripeProvider>
    );
  }
}


export default withRouter(App);
