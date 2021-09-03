import MenAtWork from "../graphics/maw.jpg";
import { Link } from "react-router-dom";

export default function Temp(props) {

  return(
    <div className="card card-container">
      <div className="home-container">
      <div className="cont1 cont">
        <div>
          <p> This part is under construction.</p>
          <p> Meanwhile, please feel free to check</p>
          {props.text || (
            <p> <Link to="/projects">Projects</Link> and <Link to="/contact">Contact</Link>.</p>
          )}
          </div>
      </div>

      <div className="cont2" style={{display: "flex", alignContent:"center"}}>
        <img src={MenAtWork} alt="Men at work" width="100%" style={{borderRadius: "10px 30px", alignSelf:"auto"}} />
      </div>
    </div>
  </div>
  );
}