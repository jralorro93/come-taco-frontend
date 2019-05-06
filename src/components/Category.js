import React from 'react';

export default class Category extends React.Component {
  render() {
    return (
      <div className="Category" onClick={this.props.handleCategoryClick}>
        {this.props.category}
      </div>
    )
  }
}
