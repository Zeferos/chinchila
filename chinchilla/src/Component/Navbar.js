import React, { Component } from 'react';
import styled from 'styled-components';

const BoxA = styled.span`
display : inline-block;
text-align: center;
width: 100%;
font-family: 'Mali';
`

const BoxTeam = styled.a`
text-align: center;
display : inline-block;
padding : 10px;
font-family: 'Mali SemiBold';
font-size : 40px;

`

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light sticky-top ">
            <a class="navbar-brand text-info" href="#">Navbar</a>
            <BoxA>
              <BoxTeam><a>What</a></BoxTeam>
              <BoxTeam><a>Who</a></BoxTeam>
              <BoxTeam><a>When</a></BoxTeam>
              <BoxTeam><a>Where</a></BoxTeam>
            </BoxA>
        </nav>
        
      </div>
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

