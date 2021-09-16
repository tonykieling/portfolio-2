import MenAtWork from "../graphics/maw.jpg";
import { Link } from "react-router-dom";

export default function Temp(props) {

  return(
    <div className="card card-container">
      <div className="temp d-flex">
        <div className="temp1">
          <p className="cp"> This part is under construction.</p>
          <p> Meanwhile, please feel free to check</p>
          {props.text || (
            <p> <Link to="/projects">Projects</Link> and <Link to="/contact">Contact</Link>.</p>
          )}
        </div>

        <div 
          className="temp2">
          <img 
            src={MenAtWork} 
            alt="Men at work" 
            width="90%"
            style={{borderRadius: "10px 30px", alignSelf:"auto"}}
          />
        </div>
      </div>
    </div>
  );
}