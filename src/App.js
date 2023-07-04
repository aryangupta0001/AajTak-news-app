import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 6;

  state = {
    category: "general"
  };

  setCategory = (newCategory) => {
    this.setState({
      category: newCategory
    })
  }

  render() {
    return (
      <Router>
          <Navbar changeCat={this.setCategory} />
          <Routes>
          <Route path='/' element={<News key={this.state.category}  pageSize={this.pageSize} country="in" category={this.state.category} />} />
          </Routes>
      </Router>
    );
  }
}