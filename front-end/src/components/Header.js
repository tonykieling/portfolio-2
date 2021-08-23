import React from 'react';
// import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

// import { Link } from "react-router-dom";


const smallDevice = window.innerWidth < 800 ? true : false;

function Header() {
  return(
    // <div style={{all: "unset"}}>
    //   <Navbar 
    //     bg="dark" variant="dark"
    //     sticky  = {"top"}
    //   >
    //     <Navbar.Brand href="/">Clockin.js</Navbar.Brand>
    //     <Nav>
    //       <Link to="/login" className="nav-link">Login</Link>
    //       <Link to="/signup" className="nav-link">Sign Up</Link>
    //       <Link to="/guidance" className="nav-link">Guide</Link>
    //       <Link to="/about" className="nav-link">About</Link>
    //       { !smallDevice
    //           ? <Link to="/contact" className="nav-link">Contact</Link>
    //             : ""
    //         }
    //     </Nav>
    //   </Navbar>
    // </div>
    <ul className="nav">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/home">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/about">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/projects">Projects</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/contact">Contact</a>
    </li>
  </ul>
  );
}


export default Header;