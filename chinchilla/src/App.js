import React, { Component } from 'react';
import Home from './Page/Home.js'
import WhatWho from './Page/WhatWho.js'
import Navbar from './Component/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Home /> 
      <WhatWho />
      </div>
    );
  }
}

export default App;
