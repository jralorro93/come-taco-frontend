import React from "react";
import FoodCard from '../components/FoodCard'
import FoodCard2 from '../components/FoodCard2'

export default class FoodContainer extends React.Component {
  state = {
    foodsList: []
  };

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
        {/* filters food that includes that categoryChoice then map to to FoodCard */}
        {this.state.foodsList.filter(food => food.category.includes(this.props.categoryChoice)).map(food => <FoodCard currentUser={this.props.currentUser} food={food}/>)}
    </div>
    );
  }
}


        // {this.state.foodsList.filter(food => food.category.includes(this.props.categoryChoice)).map(food => <FoodCard handleAddToCart={this.props.handleAddToCart} food={food}/>)}
