import { useEffect } from "react";
import TK from "../graphics/tk.jpg";
import { Link } from "react-router-dom";
import { goTop } from "../helpers/goTop";

export default function Home() {
  useEffect(() => goTop(), []);

  return(
    <div className="card card-container">
      <div className="home-container d-flex flex-direction-row m-auto">

        <div className="cont1">
          <div className="cont1-1">
            {/* 
            check poppins font 
            at fonts.google.com
            */}
            <h1>Tony Kieling</h1>
            <h1>Web</h1>
            <h1>Developer</h1>
          </div>
          <div className="cont1-2">
            <h2>Welcome to my Website</h2>
            <h3><Link to = "/home">tkwebdev.ca</Link></h3>
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
    </div>
  );
}