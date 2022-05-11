// import { useLayoutEffect, useState,  useRef } from 'react';
import { useState, useEffect, useRef } from 'react';

import './css/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header   from "./components/Header.js";
import Home     from "./components/Home.js";
import About    from "./components/About.js";
import Contact  from "./components/Contact.js";
import Projects from "./components/Projects.js";
import Samples  from "./components/Samples.js"
import Footer from "./components/Footer.js";

function App() {
  const [ headerHeight, setHeaderHeight ] = useState(null);
  const [ footerHeight, setFooterHeight ] = useState(null);

  // useLayoutEffect(() => {
  //     // window.location.href = "https://clockin.tkwebdev.ca/contact";
  //     // console.log("test", bodyRef.current.clientHeight);
  // }, []);

  const cardRef = useRef();
  const [ cardPosition, setCardPosition ] = useState(null);

  useEffect(() =>
    headerHeight && footerHeight && !cardPosition &&
    setCardPosition((window.innerHeight - cardRef.current.clientHeight - headerHeight - footerHeight) / 2)
  // eslint-disable-next-line
  , [ headerHeight, footerHeight ]);

  return (
    // <div></div>
    <div className="app-settings">
      <Router>
        <Header
          getHeaderHeight = { setHeaderHeight }
        />

        <div 
          className = "body-settings" id = "body-app"
        >
          { cardPosition === null
            ?
              <div 
                className = "card"
                ref       = { cardRef }
              />

            :
              <Switch>
                <Route exact path = "/">
                  <Home
                    cardPosition  = { cardPosition }
                  />
                </Route>

                <Route exact path = "/about">
                  <About
                    headerHeight  = { headerHeight }
                    footerHeight  = { footerHeight }
                  />
                </Route>
                
                <Route exact path = "/contact">
                  <Contact
                    headerHeight  = { headerHeight }
                    footerHeight  = { footerHeight }
                  />
                </Route>
                
                <Route exact path = "/projects">
                  <Projects
                    headerHeight  = { headerHeight }
                    footerHeight  = { footerHeight }
                  />
                </Route>

                <Route exact path = "/samples">
                  <Samples
                    headerHeight  = { headerHeight }
                    footerHeight  = { footerHeight }
                  />
                </Route>

                <Route>
                  <Redirect to = "/" />
                </Route>
              </Switch>
          }
        </div>

        <Footer
          getFooterHeight = { setFooterHeight }
        />

      </Router>
    </div>
  );
}

export default App;
