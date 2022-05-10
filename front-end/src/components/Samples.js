import { useEffect } from "react";
import { goTop } from "../helpers/goTop.js";
import MatrixCode from "../graphics/matrix-code.gif";

// this is temporary. As sson as I finish the content, it will be gone
import Temp from "./Temp.js";

const MobileScreen = window.innerWidth > 790 ? false : true;

export default function About({ headerHeight, footerHeight }) {

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
        headerHeight = { headerHeight }
        footerHeight = { footerHeight }
      />
    </div>
  );
};