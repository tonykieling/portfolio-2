import { useEffect } from "react";
import { goTop } from "../helpers/goTop.js";

import Bice from "../graphics/bice.jpg";

export default function About({ cardPosition }) {

  useEffect(() => goTop(), []);

  return(
    <div 
      className = "card card-container"
      style     = {{ top: cardPosition }}
    >
      { cardPosition &&
        <div className="about">

          <p className = "text-about">
            Hi there!! 😃
          </p>

          <p className="text-about">
            This is Tony, a software developer passionate about web environment. Working on the backend, their integrations with databases, and delivering functional and high quality web interfaces is something that moves me.
          </p>

          <p className="text-about">
            With a career in the IT industry for over 15 years, I bring experience as a Support and Network Analyst, Security Management Specialist, and IT Service Management Specialist, enabling to have a holistic vision of quality, services, expectations and customers.
          </p>

          <p className="text-about">
            For the past 4 years, shifted gears towards software development after graduating from Lighthouse Labs Bootcamp.
            Since then, my main tech stack includes NodeJs, React, and MongoDB, also using a set of tools such as Bootstrap, PostgreSQL, Redux and eventually others in order to get things done.
          </p>

          <p className="text-about">
            The whole process of developing a system is complex and includes not only technologies but also techniques and concepts. For this reason, constantly learning is a repetitive flow that feeds my skill set.
          </p>

          <p className="text-about last-about-text">
            That said, I do believe I can bring to the table a load of knowledge and resources which capacities me to reach goals and face different sorts of challenges. &nbsp;&nbsp;&nbsp;👍🖖💪✌️
          </p>

          <div className="bice">
            <img
              src       = { Bice }
              className = "bice-settings"
              alt       = "This is me" 
              width     = "100%"
            />
          </div>

          {/* </div> */}

          {/* <div 
            className="about2"
          > */}
            {/* <img 
              src       = { TK }
              className = "me"
              alt       = "This is me" 
              width     = "90%"
            /> */}

            {/* <img
              src       = { FilmStripe }
              className = "me"
              alt       = "film"
              width     = "90%"
            />
          </div> */}
        </div>
      }
    </div>
  );

  
  // return(
  //   // this is temporary. As soon as I finish the content, it will be gone
  //   <div className="me">
  //     {/* <Image /> */}
  //     <Temp 
  //       About={TK}
  //       // Style={{
  //       //   border: "1px red solid", 
  //       //   borderRadius: "20px",
  //       //   filter: "blur(7px)",
  //       //   opacity: 0.3,
  //       //   width: "75%"
  //       // }}
  //       ClassMe="me"
  //     />
  //   </div>

  //   // <div>
  //   //   <div className="card card-container">
  //   //     <h1>#Professional</h1>
  //   //     <p>Working for more than 15 years in the IT market, Tony's background includes a range of knowledge such as Infrastructure, Service Desk, Security and Management Service based on ITIL processes.</p>

  //   //     <h2>- Web Developer</h2>
  //   //     <p>As a web developer, his experience involves Javascript, React, NodeJS, HTML, CSS, Express, Redux, Bootrap, Sass, MongoDB, Postgres, among other tools.</p>
  //   //     <p>As software developement is not about coding, he also is passionate about the software lifecycle as whole. His previous experiences provides him a vast range of resources in order to get the job done.</p>
  //   //     <p>To prove that, he has developed and deployed a whole system, called ClockinJS. It means the system requirements, defining business rule, the architecture, which database and its definitions, the coding, both back and front end, testings, deploying and setting all necessary parts, were put together by him.</p>
  //   //     Find more about ClockinJS (link to the section) in the Projects section or directly reaching https://clockin.tkwebdev.ca.
  //   //     <h2>- Short Professional History</h2>
  //   //     <p></p>
  //   //     <br />
  //   //     <h1>#About me</h1>
  //   //     <p>Tony and his wife love spending time together and enjoying British Columbia natural resources as the pictures below can show it. ;)</p>
  //   //   </div>
  //   //   {/* <div style={{margin: "3rem 0 0"}}></div> */}
  //   // </div>
  // );
}