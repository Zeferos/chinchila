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
        <Navbar />
        <div id="Summer">
          <Home />
        </div>
        <div id="Winter">
          <WhatWho />
        </div>
        <div id="Spring">
          <WhereWhen />
        </div>
        <div id="Autumn">
          <FAQ />
        </div>
        <Contact />
      </div>
    );
  }
}

export default App;