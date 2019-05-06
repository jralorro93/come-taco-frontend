import React from 'react';
import MainFoods from '../components/MainFoods'
import Category from '../components/Category'

export default class CategoryList extends React.Component {
  //Not sure about this component yet
  render() {
    return (
      <div>
        <MainFoods foods={this.props.foods}/>
        <Category foods={this.props.foods} />
      </div>
    )
  }
}
