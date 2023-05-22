import { Link } from "react-router-dom";

export default function About() {
    return(
        <div className = "card" >
            <div className="about">
                <p className = "text-about">
                    Hi there!! 😃
                </p>

                <p className="text-about">
                    This is Tony, a passionate web developer based in Vancouver, Canada. 
                    I enjoy working on the backend, integrations with databases, and delivering functional and high-quality web interfaces.
                </p>

                <p className = "text-about">
                    Having recently graduated from BCIT Software Systems Development program (May/2023), I offer solid training and experience in intense deadline-focused software projects. This program covers areas related to a full-stack developer, including Project and Requirements, Back & Front-end, Database, and Deployment (AWS). <span className="hand-icons"> More <Link to="/bcit-alumni">details</Link>.</span>
                </p>

                <p className="text-about">
                    With over 15 years of experience in the IT industry, I bring a wealth of knowledge as a Support and Network Analyst, Security Management Specialist, and IT Service Management Specialist. This allows me to have a comprehensive view of quality, services, expectations, and customers.
                </p>

                <p className="text-about">
                    {/* For the past years, I have shifted gears towards software development after graduating from the Lighthouse Labs Bootcamp (Mar/2019). Since then, my main tech stack has included Node.js, React, and MongoDB, as well as a set of tools such as Bootstrap, PostgreSQL, Redux, and others in order to get things done. */}
                    For the past years, I have shifted gears towards software development after graduating from the Lighthouse Labs Bootcamp (Mar/2019). Since then, my main tech stack has included Javscript, Node.js, and React - please refer to <span className="hand-icons"><Link to="/projects"> Projects</Link></span>.
                </p>

                <p className="text-about">
                    The development of a system is a complex process that involves not only technologies but also techniques and concepts. As a result, I strive to constantly learn and expand my skill set.
                </p>

                <p className="text-about last-about-text">
                    I am confident that I can bring a wide range of knowledge and resources to the table which will enable me to accomplish goals and tackle various types of challenges. <span className="hand-icons">👍🖖💪✌️</span>
                </p>
            </div>
        </div>
    );
}