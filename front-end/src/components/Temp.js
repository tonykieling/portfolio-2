import { Link } from "react-router-dom";
import { useState, useRef, useLayoutEffect } from "react";

// temporary stuff
import MenAtWork from "../graphics/maw.jpg";
import MAW from "../graphics/maw.gif";

export default function Temp(props) {
  const cardRef = useRef(null);
  const [ cardPosition, setCardPosition ] = useState(null);

  useLayoutEffect(() => 
      cardRef && 
      setCardPosition((window.innerHeight - cardRef.current.clientHeight - props.headerHeight - props.footerHeight) / 2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  , [ cardRef ]);
  
  return(
    <div 
      className = "card card-container"
      ref   = { cardRef }
      style = {{ top: cardPosition  }}
    >
      { cardPosition &&
        <div className="temp">
          <div className="temp1">
            <p className="cp"> This area is under construction.</p>
            <img
              src={MAW}
              alt="Men at Work"
              width="25%"
            />
            <p className="cp"> Meanwhile, please feel free to check out</p>
            {props.text || (
              <p> <Link to="/projects">Projects</Link> and <Link to="/contact">Contact</Link>.</p>
            )}
          </div>

          <div 
            className="temp2"
          >
            <img 
              src={
                (props.Samples) ||
                (props.Projects) ||
                (props.About) ||
                MenAtWork
              }
              className={`${props.ClassMe}`}
              style={props.Style}
              // style={{borderRadius: "4px"}}
              // style={{border: "3px solid red"}}
              alt="Temp Img" 
              width="90%"
            />
          </div>
        </div>
      }
    </div>
  );
}