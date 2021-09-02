import MenAtWork from "../graphics/maw.jpg";
import { Link } from "react-router-dom";

export default function Temp(props) {

console.log("props0", props);
console.log("props1", props["text"]);
console.log("props2", !!props.text);
  const {text }= props ;
  console.log("text", text);
  return(
    <div className="card card-container">
      <div className="home-container">
      <div className="cont1 cont">
        {props.text || (
          <div>
            <p> This part of the site is under construction.</p>
            <p> Meanwhile, please feel free to check</p>
            <p> <Link to="/projects">Projects</Link> and <Link to="/contact">Contact</Link>.</p>
          </div>
        )}
      </div>

      <div className="cont2" style={{display: "flex", alignContent:"center"}}>
        <img src={MenAtWork} alt="Men at work" width="100%" style={{borderRadius: "10px 30px", alignSelf:"auto"}} />
      </div>
    </div>
  </div>
  );
}