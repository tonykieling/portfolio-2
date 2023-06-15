
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
// import Samples  from "./components/Samples.js"
import Footer   from "./components/Footer.js";

function App() {
    // useEffect(() =>
    //     {
    //         const checkVisitorInfo = async () => {
    //             fetch("https://geolocation-db.com/json/").then(dt => dt.json()).then(console.log);
    //         }

    //         checkVisitorInfo();
    //     }
    // , []);

    return (
        <BrowserRouter>
            <div className="app-settings">
                <Header />

                <div className = "body-settings" >
                    <Routes className = "body-settings">
                        <Route 
                            exact path = "/" 
                            element = { <Home /> }
                        />

                        <Route 
                            exact path = "/about"
                            element = { <About /> }
                        />

                        <Route 
                            exact path = "/projects"
                            element = { <Projects /> }
                        />

                        {/* <Route 
                            exact path = "/bcit-alumni"
                            element = { <Samples /> }
                        /> */}

                        <Route 
                            exact path = "/contact"
                            element = { <Contact /> }
                        />

                        <Route
                            path = "*"
                            element = { <Navigate to = "/" replace /> }
                        />
                    </Routes>
                </div>

                <Footer />

            </div>
        </BrowserRouter>
    );
}

export default App;
