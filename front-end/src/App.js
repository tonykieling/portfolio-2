// import { useLayoutEffect, useState,  useRef } from 'react';
import { useState, useEffect, useRef } from 'react';

import './css/App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import Header   from "./components/Header.js";
import Home     from "./components/Home.js";
import About    from "./components/About.js";
import Contact  from "./components/Contact.js";
import Projects from "./components/Projects.js";
import Samples  from "./components/Samples.js"
import Footer from "./components/Footer.js";
import ProjectsOld from './components/Projects-old';

function App() {
  const [ headerHeight, setHeaderHeight ] = useState(null);
  const [ footerHeight, setFooterHeight ] = useState(null);

  // useLayoutEffect(() => {
  //     // window.location.href = "https://clockin.tkwebdev.ca/contact";
  //     // console.log("test", bodyRef.current.clientHeight);
  // }, []);

  const cardRef = useRef();
  const [ cardPosition, setCardPosition ] = useState(null);

  useEffect(() => {
      headerHeight && footerHeight && !cardPosition &&
        setCardPosition((window.innerHeight - cardRef.current.clientHeight - headerHeight - footerHeight) / 2);
  }
  // eslint-disable-next-line
  , [ headerHeight, footerHeight ]);

    return (
        <div className="app-settings">
            <BrowserRouter>
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
                        <Routes>
                            <Route 
                                exact path = "/" 
                                element = {
                                    <Home
                                    cardPosition  = { cardPosition }
                                    />
                                }
                            />

                            <Route 
                                exact path = "/about"
                                element = {
                                    <About
                                        cardPosition  = { cardPosition }
                                    />
                                }
                            />

                            <Route 
                                exact path = "/projects-old"
                                element = {
                                    <ProjectsOld
                                        cardPosition  = { cardPosition }
                                    />
                                }
                            />

                            <Route 
                                exact path = "/projects"
                                element = {
                                    <Projects
                                        cardPosition  = { cardPosition }
                                    />
                                }
                            />

                            <Route 
                                exact path = "/samples"
                                element = {
                                    <Samples
                                        cardPosition  = { cardPosition }
                                    />
                                }
                            />

                            <Route 
                                exact path = "/contact"
                                element = {
                                    <Contact
                                        cardPosition  = { cardPosition }
                                    />
                                }
                            />


                            <Route
                                path = "*"
                                element = {
                                    <Navigate to = "/" replace />
                                }
                            />
                        </Routes>
                    }
                </div>

                <Footer
                    getFooterHeight = { setFooterHeight }
                />

            </BrowserRouter>
        </div>
    );
}

export default App;
