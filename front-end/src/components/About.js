import { useEffect } from "react";
import { goTop } from "../helpers/goTop.js";

// this is temporary. As soon as I finish the content, it will be gone
import Temp from "./Temp.js";
import TK from "../graphics/tk.jpg";
// import Magnifying from "../graphics/searching.gif";
// import Doing from "../graphics/doing.gif";

export default function About() {
  useEffect(() => goTop(), []);

  // const Image = () => (
  //   <div>
  //     <img
  //       src={TK}
  //       width="20%"
  //     />
  //     <img
  //       style={{position: "relative"}}
  //       src={Magnifying}
  //     />
  //   </div>
  // );


  return(
    // this is temporary. As sson as I finish the content, it will be gone
    <div>
      {/* <Image /> */}
      <Temp 
        // about={true} 
        About={TK}
        Style={{
          border: "1px red solid", 
          borderRadius: "20px",
          filter: "blur(7px)",
          opacity: 0.3,
          width: "75%"
        }}
        // Overlay={Magnifying}
      />
    </div>

    // <div>
    //   <div className="card card-container">
    //     <h1>#Professional</h1>
    //     <p>Working for more than 15 years in the IT market, Tony's background includes a range of knowledge such as Infrastructure, Service Desk, Security and Management Service based on ITIL processes.</p>

    //     <h2>- Web Developer</h2>
    //     <p>As a web developer, his experience involves Javascript, React, NodeJS, HTML, CSS, Express, Redux, Bootrap, Sass, MongoDB, Postgres, among other tools.</p>
    //     <p>As software developement is not about coding, he also is passionate about the software lifecycle as whole. His previous experiences provides him a vast range of resources in order to get the job done.</p>
    //     <p>To prove that, he has developed and deployed a whole system, called ClockinJS. It means the system requirements, defining business rule, the architecture, which database and its definitions, the coding, both back and front end, testings, deploying and setting all necessary parts, were put together by him.</p>
    //     Find more about ClockinJS (link to the section) in the Projects section or directly reaching https://clockin.tkwebdev.ca.
    //     <h2>- Short Professional History</h2>
    //     <p></p>
    //     <br />
    //     <h1>#About me</h1>
    //     <p>Tony and his wife love spending time together and enjoying British Columbia natural resources as the pictures below can show it. ;)</p>
    //   </div>
    //   {/* <div style={{margin: "3rem 0 0"}}></div> */}
    // </div>
  );
}