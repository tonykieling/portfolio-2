
import { NavLink } from "react-router-dom";


function Header() {
  return(
    <div className="navbar header">
      <NavLink 
        to="/" 
        exact={true}
        className="nav-link"
        activeClassName="active-link"
      >
        Home
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
          to="/contact"
          className="nav-link"
          activeClassName="active-link"
        >
          Contact
        </NavLink>

        <NavLink
          to="/projects"
          className="nav-link"
          activeClassName="active-link"
          >
          Projects
        </NavLink>
      </div>
    </div>
  );
}


export default Header;