import { useEffect } from "react";
import { Link } from "react-router-dom";

// this is temporary. As sson as I finish the content, it will be gone
import Temp from "./Temp";

export default function Projects() {
  useEffect(() => {
    console.log("useffecttt");
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }, []);

  // sending HTML as props
  // this is temporary. As sson as I finish the content, it will be gone
  const Text = () => (
      <>
        <p> <a href="https://clockin.tkwebdev.ca" target="_blank" rel="noreferrer"> ClockinJS </a></p>
        <p> or <Link to="/contact">Contact</Link>.</p>
      </>
  );

  return(
    // this is temporary. As sson as I finish the content, it will be gone
    // <div>
    //   <Temp text = { <Text/> }/>
    // </div>

    <div className="card card-container">
      <p><a href="https://github.com/tonykieling" target="_blank" rel="noreferrer">GitHub</a> is an awesome tool and the place where I repo my projects and codes.</p>
      <p>I wanted to mention and share a couple of them because they are... </p>

      <div className="card">
        <h3>ClockinJS</h3>
      </div>

      <div className="card">
        <h3>CRUD</h3>
      </div>

      <div className="card">
        <h3>LoginJS</h3>
      </div>

      <div className="card">
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
      </div>
    </div>
  );
}