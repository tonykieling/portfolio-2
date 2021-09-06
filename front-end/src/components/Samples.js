import { useEffect } from "react";
// this is temporary. As sson as I finish the content, it will be gone
import Temp from "./Temp.js";

export default function About() {
  useEffect(() => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }, []);

  return(
    // this is temporary. As sson as I finish the content, it will be gone
    <div>
      <Temp />
    </div>
  );
};