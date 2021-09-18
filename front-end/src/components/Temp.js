import { Link } from "react-router-dom";

// temporary stuff
import MenAtWork from "../graphics/maw.jpg";
import MAW from "../graphics/u.gif";

export default function Temp(props) {

  return(
    <div className="card card-container">
      <div className="temp">
        <div className="temp1">
          <p className="cp"> This part is under construction.</p>
          <img
            src={MAW}
            alt="Men at Work"
            width="25%"
            // style={{margin: "auto"}}
          />
          <p> Meanwhile, please feel free to check</p>
          {props.text || (
            <p> <Link to="/projects">Projects</Link> and <Link to="/contact">Contact</Link>.</p>
          )}
        </div>
        {/* {console.log("props", props)} */}

        <div 
          className="temp2">
          <img 
            src={
              (props.Samples) ||
              (props.Projects) ||
              (props.About) ||
              MenAtWork
            }
            // style={{borderRadius: "4px"}}
            style={props.Style}
            alt="Men at work" 
            width="90%"
          />
        </div>
      </div>
    </div>
  );
}