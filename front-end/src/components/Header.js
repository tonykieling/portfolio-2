import Logo from "../graphics/logo192.png";
import { NavLink } from "react-router-dom";


function Header() {
  return(
    <div className="navbar header sticky-top">
      <NavLink 
        to="/" 
        exact={true}
        className="nav-link"
        activeClassName="active-link"
      >
        <img 
          src={Logo} 
          title="Home" 
          alt="TK's logo" 
          width="100%"
          // className="logo"
        />
      </NavLink>

      <div className="nav">
        <NavLink
          to="/about" 
          className="nav-link"
          activeClassName="active-link"
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className="nav-link"
          activeClassName="active-link"
          >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="active-link"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}


export default Header;