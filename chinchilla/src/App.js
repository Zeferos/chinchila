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
        <ul>
          <li><a class="active" href="#home">Hello!</a></li>
          <li><a href="#news">Winter</a></li>
          <li><a href="#contact">Rainning</a></li>
          <li><a href="#about">Spring</a></li>
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