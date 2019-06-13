import React from "react";
import FoodCard from '../components/FoodCard'

export default class FoodContainer extends React.Component {

  // stores the foods from fetching
  state = {
    foodsList: []
  };

  // fetches the foods after mounting
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/items")
      .then(res => res.json())
      .then(foods => {
        this.setState({
          foodsList: foods
        });
      });
  }

  render() {
    return (
    <div id="FoodContainer">
      <h1>¡Come Taco!</h1>
      <ul>
        {/* filters food that includes that categoryChoice then map to to FoodCard */}
        {this.state.foodsList.filter(food => food.category.includes(this.props.categoryChoice)).map(food => <FoodCard handleAddToCart={this.props.handleAddToCart} food={food}/>)}
      </ul>
    </div>
    );
  }
}
