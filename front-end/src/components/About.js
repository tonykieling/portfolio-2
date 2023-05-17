import { useEffect } from "react";
import { goTop } from "../helpers/goTop.js";
import { Link } from "react-router-dom";

import Bice from "../graphics/bice.jpg";

export default function About({ cardPosition }) {

    useEffect(() => goTop(), []);

    return(
        <div 
            className = "card card-container"
            style     = {{ top: cardPosition }}
        >
            { cardPosition &&
                <div className="about">
                    <p className = "text-about">
                        Hi there!! 😃
                    </p>

                    <p className="text-about">
                        This is Tony, a passionate software developer specialized in the web environment. 
                        I enjoy working on the backend, integrations with databases, and delivering functional and high-quality web interfaces.
                    </p>

                    <p className = "text-about">
                        Having recently graduated from BCIT Software Systems Development program, I offer solid training and experience in intense deadline-focused software projects. This program covers areas related to a full-stack developer, including Project and Requirements, Back & Front-end, Database, and Deployment (AWS). <span className="hand-icons"> More <Link to="/projects">details</Link>.</span>
                    </p>

                    <p className="text-about">
                        With over 15 years of experience in the IT industry, I bring a wealth of knowledge as a Support and Network Analyst, Security Management Specialist, and IT Service Management Specialist. This allows me to have a comprehensive view of quality, services, expectations, and customers.
                    </p>

                    <p className="text-about">
                        For the past four years, I have shifted gears towards software development after graduating from the Lighthouse Labs Bootcamp. Since then, my main tech stack has included NodeJs, React, and MongoDB, as well as a set of tools such as Bootstrap, PostgreSQL, Redux, and others in order to get things done.
                    </p>

                    <p className="text-about">
                        The development of a system is a complex process that involves not only technologies but also techniques and concepts. As a result, I strive to constantly learn and expand my skill set.
                    </p>

                    <p className="text-about last-about-text">
                        I am confident that I can bring a wide range of knowledge and resources to the table which will enable me to accomplish goals and tackle various types of challenges. <span className="hand-icons">👍🖖💪✌️</span>
                    </p>

                    <div className="bice">
                    <img
                        src       = { Bice }
                        className = "bice-settings"
                        alt       = "This is me" 
                        width     = "100%"
                    />
                    </div>
                </div>
            }
        </div>
    );
}