import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize = 6;
  title = "Home";
  api = process.env.REACT_APP_NEWS_API_KEY;

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

    console.log(this.api);
    return (
      <>
        <Navbar changeCat={this.setCategory} />
        <News key={this.state.title} pageSize={this.pageSize} country="in" category={this.state.category} title = {this.state.title} api = {this.api} />
      </>
    );
  }
}