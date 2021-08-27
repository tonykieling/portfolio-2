import React from 'react';
// import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

// import { NavLink } from "react-router-dom";


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

    // <ul className="nav">
    // <li className="nav-item">
    //   <a className="nav-link active" aria-current="page" href="/home">Home</a>
    // </li>
    // <li className="nav-item">
    //   <a className="nav-link" href="/about">About</a>
    // </li>
    // <li className="nav-item">
    //   <a className="nav-link" href="/projects">Projects</a>
    // </li>
    // <li className="nav-item">
    //   <a className="nav-link" href="/contact">Contact</a>
    // </li>
    // </ul>

    // <ul className="nav nav-pills header" id="pills-tab" role="tablist">
    //   <div>
    //     <a className="nav-item nav-link" href="/home" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
    //   </div>
    //   <div className="header-right">
    //     <a className="nav-item nav-link" href="/about">About</a>
    //     <a className="nav-item nav-link" href="/projects">Projects</a>
    //     <a className="nav-item nav-link" href="/contact">Contact</a>
    //   </div>
    // </ul>

    <div className="header">
      <div>
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
      <div className="header-right">
        <a className="nav-item nav-link" href="/about">About</a>
        <a className="nav-item nav-link" href="/projects">Projects</a>
        <a className="nav-item nav-link" href="/contact">Contact</a>
      </div>
    </div>

    // <div>
    //   <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    //     <li class="nav-item">
    //       <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
    //     </li>
    //   </ul>
    //   <div class="tab-content" id="pills-tabContent">
    //     <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">.1..</div>
    //     <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">..22.</div>
    //     <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">..333.</div>
    //   </div>
    // </div>

//  <div>
//   <nav>
//     <div class="nav nav-pills" id="nav-pills" role="tablist">
//       <a class="nav-link active" id="nav-home" data-bs-toggle="pill" href="/home" role="tab">Home</a>
//       <a class="nav-link" id="nav-profile" data-bs-toggle="pill" href="/about" role="tab">About</a>
//       <a class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
//     </div>
//   </nav>

//   <div class="tab-content" id="nav-tabContent">
//     <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" href="/home">
//       <p>clicked home</p>
//       <Redirect to = "/home" />
//     </div>
//     <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
//       <p>clicked profile</p>
//       <p>clicked profile</p>
//     </div>
//     <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
//       <p>clicked contact</p>
//       <p>clicked contact</p>
//       <p>clicked contact</p>
//     </div>
//   </div>
// </div>

);
// <div>
//   <nav>
//     <div class="nav nav-tabs" id="nav-tab" role="tablist">
//       <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="/home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
//       <a class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="/about" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
//       <a class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
//     </div>
//   </nav>

//   <div class="tab-content" id="nav-tabContent">
//     <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
//       <p>clicked home</p>
//       <p>clicked home</p>
//       <p>clicked home</p>
//     </div>
//     <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
//       <p>clicked profile</p>
//       <p>clicked profile</p>
//       <p>clicked profile</p>
//     </div>
//     <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
//       <p>clicked contact</p>
//       <p>clicked contact</p>
//       <p>clicked contact</p>
//     </div>
//   </div>
// </div>
}


export default Header;