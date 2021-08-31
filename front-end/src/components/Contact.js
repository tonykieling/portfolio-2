// import gmailIcon from "../icons/gmail.svg";
// import resumeIcon from "../icons/resume.svg";
// import linkedinIcon from "../icons/linkedin.png";
// import githubIcon from "../icons/github.png";
import Footer from "./Footer";

export default function Contact() {

  return(
    <div>
      <div className="card card-container">
        <p>Please, feel free to reach out using the form below or check-out or message me using the social medias as follow.</p>

        <label>Name:</label>
        <input placeholder="Your name"></input>
        <br />
        <br />

        <label>Email:</label>
        <input placeholder="Your email"></input>
        <br />
        <br />

        <label>Leave your message:</label>
        <textarea placeholder="Please, leave your message"></textarea>
        <br />
        <br />

        {/* <div className="social-media-box">
          <a href="mailto:tony.kieling@gmail.com" target="_top" >
            <img src={gmailIcon} alt="gmail" title="Gmail" className="icon-settings" />
          </a>

          <a href="https://www.linkedin.com/in/tony-kieling/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} title="LinkedIn" className="icon-settings" alt="linkedin" />
          </a>  

          <a href="https://github.com/tonykieling" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} title="GitHub" className="icon-settings" alt="github"/>
          </a>

          <a href="https://resume.creddle.io/resume/hqaeq2fbnr6" target="_blank" rel="noopener noreferrer">
            <img src={resumeIcon} title="Resume" alt="resume" className="icon-settings" />
          </a>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}