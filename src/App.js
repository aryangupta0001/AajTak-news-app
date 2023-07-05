import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  title = "Home";

  state = {
    category: "general",
    title: "Home"
  };

  setCategory = (newCategory) => {
    let category = newCategory === "home" ? "general" : newCategory;
    // let title = newCategory;

    
    
    this.setState({
      category: category,
      title: newCategory.charAt(0).toUpperCase() + newCategory.slice(1)
    })
  }

  render() {
    return (
      <>
      {/* // <Router>
      //   <Navbar changeCat={this.setCategory} />
      //   <Routes>
      //     <Route path='/' element={<News key={this.state.category} pageSize={this.pageSize} country="in" category={this.state.category} />} />
      //   </Routes>  
      // </Router> */}

        <Navbar changeCat={this.setCategory} />
        <News key={this.state.title} pageSize={this.pageSize} country="in" category={this.state.category} title = {this.state.title} />
      </>
    );
  }
}