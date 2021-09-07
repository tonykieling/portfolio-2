import Logo from "../graphics/logo192.png";
import { NavLink } from "react-router-dom";


function Header() {
  return(
    <div className="navbar header sticky-top">
      {/* <div className = "circ"> */}
      <div className="logo">
        <NavLink 
          to              = "/" 
          exact           = {true}
          className       = "nav-link logo"
          activeClassName = "active-link"
        >
          <img 
            src     = { Logo } 
            alt     = "TK's logo" 
            title   = "Home" 
            width   = "100%"
          />
        </NavLink>
      </div>

      <div className="nav">
        <NavLink
          to              = "/about" 
          className       = "nav-link"
          activeClassName = "active-link"
        >
          About
        </NavLink>

        <NavLink
          to              = "/projects"
          className       = "nav-link"
          activeClassName = "active-link"
          >
          Projects
        </NavLink>

        <NavLink
          to              = "/samples"
          className       = "nav-link"
          activeClassName = "active-link"
        >
          Snippet Samples
        </NavLink>
        
        <NavLink
          to              = "/contact"
          className       = "nav-link"
          activeClassName = "active-link"
        >
          Contact
        </NavLink>

      </div>
    </div>
  );
}


export default Header;