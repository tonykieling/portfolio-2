// import { useLayoutEffect } from 'react';


import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header   from "./components/Header.js";
import Home     from "./components/Home.js";
import About    from "./components/About.js";
import Contact  from "./components/Contact.js";
import Projects from "./components/Projects.js";
import Samples  from "./components/Samples.js"

function App() {
  // useLayoutEffect(() => {
  //     // window.location.href = "https://clockin.tkwebdev.ca/contact";
  //     console.log("test");
  // }, []);

  return (
    // <div></div>
    <div className="app-settings">
      <Router>
        <Header />

        <div className="body-settings">
          <Switch>
            <Route exact path = "/">
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

            <Route exact path = "/samples">
              <Samples />
            </Route>

            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
