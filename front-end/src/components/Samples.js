import { useEffect } from "react";
import { goTop } from "../helpers/goTop.js";
import MatrixCode from "../graphics/matrix-code.gif";

// this is temporary. As sson as I finish the content, it will be gone
import Temp from "./Temp.js";

export default function About() {
  useEffect(() => goTop(), []);

  return(
    // this is temporary. As sson as I finish the content, it will be gone
    <div>
      <Temp 
        // samples={true} 
        Samples={MatrixCode} 
        Style={{borderRadius: "4px"}}
      />
    </div>
  );
};