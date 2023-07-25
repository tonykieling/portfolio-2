import TK from "../graphics/tk888.jpg";

import ShortAbout from "./ShortAbout.js";
import Projects from "./Projects.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { useRef } from "react";
import ScrollIntoView from 'react-scroll-into-view'

export default function Home() {
    const topRef = useRef(null);
    const moveUp = () => {
        console.log("scrollllllllll");
        // topRef.current.scrollIntoView({
        //     top: "-150px",
        //     left: "-160px"
        // });

        topRef.current.scrollIntoView({
            behavior: "smooth", block: "start", inline: "nearest"
        });
    }

    return(
        // <div className = "card">
        <>
            {/* <div id="top">Scroll target element</div> */}
            <div 
                // className="home-container d-flex flex-direction-row m-auto"
                className="home-container m-auto"
                ref = { topRef }
            >
                <div className="cont1">
                <div className="cont1-1">
                    <div className="my-name">
                        <h1 className="mt-3">Tony Kieling</h1>
                    </div>
                    <h2>Web Developer</h2>
                </div>
                {/* <div className="cont1-2">
                    <h3>Welcome to my Website</h3>
                </div> */}
                </div>

                <div className="cont2">
                <img 
                    className = "picture"
                    src       = { TK } 
                    alt       = "TK"
                />
                </div>

                <ShortAbout />
                <Projects />
                <About />
                <Contact moveUp={moveUp} />
            </div>
        </>
    );
}