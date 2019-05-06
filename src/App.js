import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoryList from './containers/CategoryList'
import NavBar from './components/NavBar'
import MainFoods from './components/MainFoods'

import './App.css';

export default class App extends React.Component {

  state = {
    foodsList: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/items')
      .then(res => res.json())
      .then(foods => {
        this.setState({
          foodsList: foods
        })
      })
  }
  render() {
    return (
      <div>
        <CategoryList foods={this.state.foodsList} />
        <MainFoods foods={this.state.foodsList} />
      </div>
    )
  }
}
