import React, { useState, useEffect, useReducer} from "react";
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import axios from 'axios'

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
import reducer from './utils/Reducers/reducer'
import {authHeaders} from './utils/headers'

//Imports from MUI
import CssBaseline from '@material-ui/core/CssBaseline'

export const UserContext = React.createContext()

const initialState = {
  user: {},
  shoppingCart: []
}

const stripePromise = loadStripe('pk_test_OHsp793zkjWWR6rFPeVnf7nR00uGTVDgXk')

const App = (props) => {
    const [ user, dispatch ] = useReducer(reducer, initialState)

    useEffect(()=> {
      if (localStorage.getItem('token')) {
        axios({
          method: 'get',
          headers: authHeaders,
          url: 'http://localhost:3000/api/v1/profile'
        })
          .then(res => {
            dispatch({type: 'GET_USER', payload: res.data})
            dispatch({type: 'GET_ITEMS', payload: res.data.items})
          })
          .catch(err => console.log('Error: ', err))

      }
    }, [])

    useEffect(()=> {
      const updateOrders = () => {
        axios({
          method: 'get',
          headers: authHeaders,
          url: 'http://localhost:3000/api/v1/profile'
        })
          .then(res => {
            
            dispatch({type: 'UPDATE_ORDERS', payload: res.data.orders})
          })
          .catch(err => console.log('Error: ', err))
      }
      
      updateOrders()
    }, [user.shoppingCart])
    
    return (
        <div>
          <Switch>
            <div>
              <UserContext.Provider value={{user, dispatch}}>
                <CssBaseline/>
                <SideDrawer />
                <div className='App'>
                  {/* Route to Menu page */}
                  <Route exact path='/' render={HomePage}/>
                  <Route exact path='/menu' render={
                    () => {
                      return (
                        <div>
                          <FoodContainer/>
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
                        <Login history={props.history} />
                      )
                    }
                      } />
                  {/* Route to Signup page */}
                  <Route path='/signup' render={
                    () => {
                      return(
                        <SignupForm history={props.history}/>
                      )
                    }
                  } />
                  {/* Route to ShoppingCart page */}
                  <Route path='/shoppingcart' render={
                    () => {
                      return (
                        <ShoppingCart history={props.history}/>
                      )
                    }
                  } />
                {/* Route to Checkout page*/}
                  <Route path='/checkout' render={
                    () => {
                      return (
                        <Elements stripe={stripePromise}>
                          <Checkout />
                        </Elements>
                      )
                    }
                  }/>
                </div>
              </UserContext.Provider>
            </div>
          </Switch>
        </div>
    )
}

export default withRouter(App)

    // useEffect(() => {
    //   const fetchData = () => {
        // if (localStorage.getItem('token') && !currentUser) {
        //   axios({
        //     method: 'get',
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'Authorization': `Bearer ${localStorage.getItem('token')}`
        //     },
        //     url: 'http://localhost:3000/api/v1/profile'
        //   })
        //     .then(res => setCurrentUser(res.data.user))
        // }
    //   }

    //   fetchData()
    // }, [])