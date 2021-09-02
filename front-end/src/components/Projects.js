import Temp from "./Temp";
import { Link } from "react-router-dom";

export default function Projects() {

  const temp = {
    text: 
      <div>
        <p> This part of the site is under construction.</p>
        <p> Meanwhile, please feel free to check</p>
        <p> <Link to="/projects">Projects</Link> and <Link to="/contact">Contact</Link>.</p>
        <p> and also <a href="https://tkwebdev.ca" target="_blank" rel="noreferrer"> ClockinJS </a></p>
      </div>
  };
console.log("sending temp", temp, typeof temp);
  return(
    <div>
      <Temp props = { temp }/>
    </div>

    // <div className="card card-container">
    //   <p>GitHub is an awesome tool and the place where I repo my projects and codes.</p>
    //   <p>I wanted to mention and share a couple of them because they are... </p>

    //   <div className="card">
    //     <h3>ClockinJS</h3>
    //   </div>

    //   <div className="card">
    //     <h3>CRUD</h3>
    //   </div>

    //   <div className="card">
    //     <h3>LoginJS</h3>
    //   </div>

    //   <div className="card">
    //     <p>I also be glad sharing and executing some pieces of code.</p>
    //     <p>It is also called algorithm and they can executed, as well.</p>
    //     <div className="card">
    //       <h3>Exemple 1</h3>
    //       <p><i>(it will open a model and run the code)</i></p>
    //     </div>
    //     <div className="card">
    //       <h3>Exemple 2</h3>
    //       <p><i>(it will open a model and run the code)</i></p>
    //     </div>
    //     <div className="card">
    //       <h3>Exemple 3</h3>
    //       <p><i>(it will open a model and run the code)</i></p>
    //     </div>
    //   </div>
    // </div>
  );
}