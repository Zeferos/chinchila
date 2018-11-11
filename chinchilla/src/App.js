import React, { Component } from 'react';
import Home from './Page/Home.js'
import WhatWho from './Page/WhatWho.js'
import Navbar from './Component/Navbar.js'
import WhereWhen from './Page/WhereWhen.js'
import FAQ from './Page/FAQ.js'
import Contact from './Page/Contact.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <Home />
        <WhatWho />
        <WhereWhen />
        <FAQ />
        <Contact />
      </div>
    );
  }
}

export default App;