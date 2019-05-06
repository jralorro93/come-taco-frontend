import React from 'react';

const FoodCard = (props) => {
  return (
    <div className="FoodCard">
      <h1>{props.food.name}</h1>
      <img src={props.food.imgURL} alt={props.food.name} />
      <h3>{props.food.description} </h3>
      <h4>{props.food.price} </h4>
    </div>
  )
}
export default FoodCard
