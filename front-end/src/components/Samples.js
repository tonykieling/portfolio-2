import { useEffect } from "react";
import { goTop } from "../helpers/goTop.js";
import MatrixCode from "../graphics/matrix-code.gif";

// this is temporary. As sson as I finish the content, it will be gone
import Temp from "./Temp.js";

const MobileScreen = window.innerWidth > 790 ? false : true;

export default function About({ cardPosition }) {

  useEffect(() => goTop(), []);


  return(
    // this is temporary. As soon as I finish the content, it will be gone
    <div>
      <Temp 
        // samples={true} 
        Samples = { MatrixCode } 
        Style   = {{
          borderRadius: "4px", 
          width       : "100%",
          height      : MobileScreen && "60%",
          marginTop   : MobileScreen ? "5rem" : 0
        }}
        cardPosition = { cardPosition }
      />

        {/* <div className="card">
          <p>I also be glad sharing and executing some pieces of code.</p>
          <p>It is also called algorithm and they can executed, as well.</p>
          <div className="card">
            <h3>Exemple 1</h3>
            <p><i>(it will open a model and run the code)</i></p>
          </div>
          <div className="card">
            <h3>Exemple 2</h3>
            <p><i>(it will open a model and run the code)</i></p>
          </div>
          <div className="card">
            <h3>Exemple 3</h3>
            <p><i>(it will open a model and run the code)</i></p>
          </div>
        </div> */}
    </div>
  );
};