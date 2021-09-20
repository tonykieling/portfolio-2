import gmailIcon from "../icons/gmail.svg";
import resumeIcon from "../icons/resume.svg";
import linkedinIcon from "../icons/linkedin.png";
import githubIcon from "../icons/github.png";

export default function SocialMediasBox() {
  return(
    <div className="social-media-box">
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
  </div>
  );
}