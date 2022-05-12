import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { goTop } from "../helpers/goTop";

import ClockinJS from "../graphics/clockinjs.png";
import HomeSeeker from "../graphics/home-seeker.png";
import Crud from "../graphics/crud.png";


// this is temporary. As sson as I finish the content, it will be gone
// import Temp from "./Temp";
// import ProjectsImg from "../graphics/project.png";

const mobileScreen = window.innerWidth > 790 ? false : true;

export default function Projects({ cardPosition }) {
  useEffect(() => goTop(), []);

  // sending HTML as props
  // this is temporary. As sson as I finish the content, it will be gone
  // const Text = () => (
  //     <>
  //       <p> 
  //         <a href="https://clockin.tkwebdev.ca" target="_blank" rel="noreferrer"> ClockinJS</a>, &nbsp;
  //         <a href="https://home-seeker.tkwebdev.ca" target="_blank" rel="noreferrer">Home Seeker</a>
  //       </p>
  //       <p> <a href="https://crud.tkwebdev.ca" target="_blank" rel="noreferrer">CRUD</a>  &nbsp;
  //           or &nbsp;  <Link to="/contact">Contact</Link>.</p>
  //     </>
  // );

  return(
    // this is temporary. As soon as I finish the content, it will be gone
    // <div>
    //   <Temp 
    //     text = { <Text /> } 
    //     // projects={true} 
    //     Projects      = {ProjectsImg}
    //     Style         = {{opacity: "0.6", width: "50%", height: MobileScreen && "60%", borderRadius: 0, marginTop: MobileScreen ? "4rem" : 0}}
    //     cardPosition  = { cardPosition }
    //   />
    // </div>

    <div className="card" style = {{ top: cardPosition }}>
      <div className = "projects">
        <p style={{marginTop: "2rem"}}><a href="https://github.com/tonykieling" target="_blank" rel="noreferrer">GitHub</a> is an awesome tool and the place where I repo my projects and codes.</p>
        <p>I wanted to mention and share some of them.</p> 
        <p>Feel free to check out any of my dev writings and reach out.</p>

        <div className="card-sub-projects">
          <h3>ClockinJS</h3>
          <p>A system that allows one to have all their clients data, their clockins and invoices, in one place. It is easy to manage and track their work with them. And it is a free tool. 🤑</p>
          <p><a href="https://clockin.tkwebdev.ca/" target="_blank" rel="noreferrer">https://clockinjs.tkwebdev.ca</a></p>

          <div className="bice">
            <img
              src       = { ClockinJS }
              className = "bice-settings"
              alt       = "This is me" 
              width     = { mobileScreen ? "100%" : "50%" }
            />
          </div>
        </div>

        <div className="card-sub-projects">
          <h3>Home Seeker</h3>
          <p>An automated system to web scrap info on Craigslist about rentals availability. I have built it to help my wife and I to find our new place to live and receive messages automatically to shortcut our searchings.</p> 
          <p>Mission accomplished and happy new homers! 🏠😊</p>
          <p><a href="https://home-seeker.tkwebdev.ca" target="_blank" rel="noreferrer">https://home-seeker.tkwebdev.ca</a></p>

          <div className="bice">
            <img
              src       = { HomeSeeker }
              className = "bice-settings"
              alt       = "This is me" 
              width     = { mobileScreen ? "100%" : "50%" }
            />
          </div>
          
        </div>

        <div className="card-sub-projects">
          <h3>CRUD</h3>

          <p>It is also a full-stack application with the purpose to demonstrate a basic functioning of a computer program.</p>
          <p><b>CRUD</b> stands for <b>C</b>reate, <b>R</b>ead, <b>U</b>pdate, and <b>D</b>elete. They are the 4 basic ways to proceed with data.</p>
          <p><a href="https://crud.tkwebdev.ca" target="_blank" rel="noreferrer">https://crud.tkwebdev.ca</a></p>

          <div className="bice">
            <img
              src       = { Crud }
              className = "bice-settings"
              alt       = "This is me" 
              width     = { mobileScreen ? "100%" : "50%" }
            />
          </div>
        </div>

        <div className="card-sub-projects">
          <h3>My website</h3>
          <p>This home page you are reading right now is all developed by myself from scratch.</p>
          <p>Some of the tools used here and in other projects include React, Bootstrap, Sass, NodeJs, Axios, ExpressJs, Moongoose, PostgreSQL, Node-mailer, and Google reCaptcha.</p>
          <p><a href="https://tkwebdev.ca" target="_blank" rel="noreferrer">https://tkwebdev.ca</a></p>
        </div>

      </div>
    </div>
  );
}