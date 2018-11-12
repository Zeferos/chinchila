import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    background-color: rgb(247,186,220);
    position: fixed;
    width: 100vw;
    margin: 0;
    height: 60px;
    /* line-height: 50px;
    vertical-align: middle; */
    z-index:10;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-decoration: none;
    font-size : 25px;
    font-family: Mali SemiBold;
    text-color: "#6e6b6d";
`

class Navbar extends Component {
  render() {
    return (
      <Nav className='col-12 row text-left'>
        <a href='#Summer' className='col-3 nav-link text-dark'>
          Summer
        </a>
        <a href='#Winter' className='col-3 nav-link text-dark'>
          Winter
        </a>
        <a href='#Spring' className='col-3 nav-link text-dark'>
          Spring
        </a>
        <a href='#Autumn' className='col-3 nav-link text-dark'>
          Autumn
        </a>

      </Nav >

    );
  }
}

export default Navbar;



//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>

