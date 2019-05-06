import React from 'react';
import Categorylist from './containers/CategoryList'

import './App.css';

export default class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/items')
      .then(res => res.json())
      .then(data => console.log(data))
  }
  render() {
    return null
  }
}
