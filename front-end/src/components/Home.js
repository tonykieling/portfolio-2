import { useEffect } from "react";
import TK from "../graphics/tk8.jpg";

// import { Link } from "react-router-dom";
import { goTop } from "../helpers/goTop";

export default function Home({ cardPosition }) {

    useEffect(() => {
        goTop();
    }, []);

  return(
    <div 
      className = "card"
      style     = {{ top: cardPosition }}
    >
      <div 
        className="home-container d-flex flex-direction-row m-auto"
      >
        <div className="cont1">
          <div className="cont1-1">
            {/* 
            check poppins font 
            at fonts.google.com
            */}
            <div className="my-name">
              <h1>Tony Kieling</h1>
            </div>
            <h1>Web Developer</h1>
            {/* <h1>Web</h1>
            <h1>Developer</h1> */}
          </div>
          <div className="cont1-2">
            <h2>Welcome to my Website</h2>
            {/* <h3><Link to = "/home">tkwebdev.ca</Link></h3> */}
          </div>
        </div>

        <div className="cont2">
          <img 
            className = "picture"
            src       = { TK } 
            alt       = "TK"
          />
        </div>
      </div>
      {/* <div style={{border: "1px solid red", width: "90%", height: "25rem"}}>asd</div> */}
    </div>
  );
}