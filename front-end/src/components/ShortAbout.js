import { Link } from "react-router-dom";

export default function ShortAbout() {
    return(
        <div className = "component" >
            <p className="text-about">
                Passionate web software engineer with a strong background in analyzing, coding, and problem-solving. Proficient in JavaScript ecosystems, including Node.js and React, as well as HTML, CSS, C#/.NET, and other modern web technologies. 
            {/* </p> */}

            {/* <p className = "text-about">
                During my past IT experience, I gained valuable insights into the software development process from specification to deployment. I have successfully delivered projects that involved a deep understanding of service considerations such as life cycle management, customer support, SLAs, security, and client relationships.
            </p>

            <p className="text-about">
                Notable achievements include <a href="https://home-seeker.tkwebdev.ca" target="_blank" rel="noreferrer"> Clockin.js </a> and  <a href="https://home-seeker.tkwebdev.ca" target="_blank" rel="noreferrer"> Home-seeker</a>. My goal is to create efficient and robust web solutions that exceed expectations and deliver exceptional user experiences.
            </p>

            <p className="text-about">
                As a strong believer in collaboration and effective communication, I thrive in team environments and am always eager to contribute my expertise to challenging projects. If you're looking to connect, collaborate, or explore potential opportunities, feel free to reach out to me. Let's build something amazing together!
            </p> */}
                <span> <Link to="/about">More info</Link></span>
            </p>
        </div>
    );
}

// previous LinkedIn About:
// "Enthusiastic Web Developer passionate about analyzing, coding, and problem-solving. Proficient in JavaScript ecosystems (Node.js, React, etc.), HTML, and CSS, among others. Benefiting from my experience as an IT systems analyst for more than a decade, I apply best practices to deliver efficient solutions and collaborate with diverse teams. Excited by new challenges and ready to deliver reliable outcomes.  Visit https://tkwebdev.ca for more info!"