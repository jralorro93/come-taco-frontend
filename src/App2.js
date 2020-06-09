import React, { useState, useEffect, useRef} from "react";
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import {StripeProvider} from 'react-stripe-elements';
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

//Imports from MUI
import CssBaseline from '@material-ui/core/CssBaseline'

export const UserContext = React.createContext()


const App = (props) => {
    const [ currentUser, setCurrentUser ] = useState(null)
    const [ shoppingCart, setShoppingCart ] = useState([])

    useEffect(() => {
      const fetchData = () => {
        if (localStorage.getItem('token') && !currentUser) {
          axios({
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            url: 'http://localhost:3000/api/v1/profile'
          })
            .then(res => setCurrentUser(res.data.user))
        }
      }

      fetchData()
    }, [])
    
    return (
        <StripeProvider apiKey='pk_test_OHsp793zkjWWR6rFPeVnf7nR00uGTVDgXk'>
          <Switch>
            <div>
              <UserContext.Provider value={currentUser}>
                <CssBaseline/>
                <SideDrawer currentUser={currentUser} setCurrentUser={setCurrentUser}/>
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
                        <Login history={props.history} setCurrentUser={setCurrentUser}/>
                      )
                    }
                      } />
                  {/* Route to Signup page */}
                  <Route path='/signup' render={
                    () => {
                      return(
                        <SignupForm history={props.history} setCurrentUser={setCurrentUser}/>
                      )
                    }
                  } />
                  {/* Route to ShoppingCart page */}
                  <Route path='/shoppingcart' render={
                    () => {
                      return (
                        <ShoppingCart currentUser={currentUser} shoppingCart={shoppingCart} history={props.history}/>
                      )
                    }
                  } />
                {/* Route to Checkout page*/}
                  <Route path='/checkout' render={
                    () => {
                      return (
                        <Checkout currentUser={currentUser} shoppingCart={shoppingCart}/>
                      )
                    }
                  }/>
                </div>
              </UserContext.Provider>
            </div>
          </Switch>
        </StripeProvider>
    )
}

export default withRouter(App)