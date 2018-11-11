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
<<<<<<< HEAD
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
=======
        <ul>
          <li><a href="#Summer">Summer</a></li>
          <li><a href="#Winter">Winter</a></li>
          <li><a href="#Spring">Spring</a></li>
          <li><a href="#Autumn">Autumn</a></li>
        </ul>
        <div id="Summer"></div>
        <Home />

        <div id="Winter"></div>
        <WhatWho />
        <div id="Spring"></div>
        <WhereWhen />
        <div id="Autumn"></div>
        <FAQ />
>>>>>>> 5cc8dd22083137eaad6b8c6951a04f639777aec1
        <Contact />
      </div>
    );
  }
}

export default App;