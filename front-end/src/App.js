import { useLayoutEffect } from 'react';

/*
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";
*/

function App() {
  useLayoutEffect(() => {
      window.location.href = "https://clockin.tkwebdev.ca/contact";
  }, []);

  return (
    <div></div>
    /*
    <Router>
      <Header />
      <Switch>
        <div className="App-header">
          <Route exact path = "/home">
            <Home />
          </Route>
          <Route exact path = "/about">
            <About />
          </Route>
          <Route exact path = "/contact">
            <Contact />
          </Route>
          <Route exact path = "/projects">
            <Projects />
          </Route>
        </div>
      </Switch>
    </Router>
    */

    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
