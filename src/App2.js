import React, { useState, useEffect, useRef} from "react";
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import {StripeProvider} from 'react-stripe-elements';

//Imports from Components
import "./App.css";
import HomePage from './containers/HomePage'
import FoodContainer from './containers/FoodContainer'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import SignupForm from './components/SignupForm'
import ShoppingCart from './components/ShoppingCart'
import Checkout from './components/Checkout'
import SideDrawer from "./components/SideDrawer";

//Imports from MUI
import CssBaseline from '@material-ui/core/CssBaseline'

const App = (props) => {
    const [ currentUser, setCurrentUser ] = useState()
    const [ shoppingCart, setShoppingCart ] = useState([])

    useEffect(() => {
        if (!currentUser && localStorage.getItem('token') !==null) {
            fetch("http://localhost:3000/api/v1/profile", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(user => {
                setCurrentUser(user)
                setShoppingCart(user.items)
            })
        }
    }, [])

    // useEffect(() => {
    //     const fetchData = () => {

    //     }
    //     fetchData()
    // }, [currentUser])
    
    console.log('this is currentUser', currentUser)
    return (
        <StripeProvider apiKey='pk_test_OHsp793zkjWWR6rFPeVnf7nR00uGTVDgXk'>
          <Switch>
            <div>
              <CssBaseline/>
              <SideDrawer currentUser={currentUser} setCurrentUser={setCurrentUser}/>
              <div className='App'>
                {/* Route to Menu page */}
                <Route exact path='/' render={HomePage}/>
                <Route exact path='/menu' render={
                  () => {
                    return (
                      <div>
                        <FoodContainer currentUser={this.state.currentUser} categoryChoice={this.state.categoryChoice}/>
                      </div>
                    )
                  }
                }
                />
                {/* Route to About page */}
                <Route path='/about' render={About}/>
                {/* Route to Contact page */}
                <Route path='/contact' render={
                  () => {
                    return (
                      <div>
                        <Contact/>
                      </div>
                    )
                  }
                }/>
                {/* Route to Login page */}
                <Route path='/login' render={
                  () => {
                    return (
                      <Login setCurrentUser={setCurrentUser} history={props.history}/>
                    )
                  }
                    } />
                {/* Route to Signup page */}
                <Route path='/signup' render={
                  () => {
                    return(
                      <SignupForm setCurrentUser={setCurrentUser} history={props.history}/>
                    )
                  }
                } />
                {/* Route to ShoppingCart page */}
                <Route path='/shoppingcart' render={
                  () => {
                    return (
                      <ShoppingCart currentUser={this.state.currentUser} shoppingCart={this.state.shoppingCart} handleDelete={this.handleDelete} history={props.history}/>
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
    )
}

export default withRouter(App)