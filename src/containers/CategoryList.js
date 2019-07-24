import React from 'react';
import Category from '../components/Category'

export default class CategoryList extends React.Component {
  render() {
    let categoryList = ["Appetizers", "Main", "Desserts", "Drinks"]
    return (
      <div id="CategoryList">
        {categoryList.map(category => <Category handleCategoryClick = {this.props.handleCategoryClick} category={category}/>)}
      </div>
    )
  }
}
