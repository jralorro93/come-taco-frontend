import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryList from "./containers/CategoryList";
import NavBar from "./components/NavBar";

import "./App.css";
import FoodContainer from './containers/FoodContainer'
import About from './components/About'

export default class App extends React.Component {

  // we need this to filter by categoryChoice
  // send this to FoodContainer
  state = {
    categoryChoice: ""
  }

  // handles click to change categoryChoice by sending this function
  // down to CategoryList and down to a specific Category
  handleCategoryClick = (event) => {
    this.setState({
      categoryChoice: event.target.innerText.toLowerCase()
    })
  }

  render() {
    return (
        <div>
          <NavBar />
          <CategoryList handleCategoryClick={this.handleCategoryClick}/>
          <FoodContainer categoryChoice={this.state.categoryChoice}/>
        </div>
    );
  }
}
