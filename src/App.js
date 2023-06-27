import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  a = "Aryan";
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}