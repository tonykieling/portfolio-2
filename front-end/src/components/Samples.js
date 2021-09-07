import { useEffect } from "react";
// this is temporary. As sson as I finish the content, it will be gone
import Temp from "./Temp.js";
import { goTop } from "../helpers/goTop.js";

export default function About() {
  useEffect(() => goTop(), []);

  return(
    // this is temporary. As sson as I finish the content, it will be gone
    <div>
      <Temp />
    </div>
  );
};