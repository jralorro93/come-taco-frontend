import React from 'react';

const Food = (props) => {
  return (
    <div>
      <h1>{props.food.name}</h1>
      <img src={props.food.imgURL} alt={props.food.name} />
      <h3>{props.food.description} </h3>
      <h4>{props.food.price} </h4>
    </div>
  )
}
export default Food
