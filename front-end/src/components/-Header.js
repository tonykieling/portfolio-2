import Logo from "../graphics/logo192.png";
import { NavLink } from "react-router-dom";

const Temp = () => (
  <div className="navbar navbar-expand-md">

    <div className="navbar header sticky-top">
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
  </div>
);

const TempBackup = () => (
  <div className="navbar header sticky-top">
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

// const BootstrapHeader = () => (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">Navbar</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/about">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/contact">Contact</a>
//             </li>
//             {/* <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li><a className="dropdown-item" href="/">Action</a></li>
//                 <li><a className="dropdown-item" href="/">Another action</a></li>
//                 <li><hr className="dropdown-divider"></li>
//                 <li><a className="dropdown-item" href="/">Something else here</a></li>
//               </ul>
//             </li> */}
//             <li className="nav-item">
//               <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
//             </li>
//           </ul>
//           {/* <form className="d-flex">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form> */}
//         </div>
//       </div>
//     </nav>
// );

function Header() {
  return(
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-info header">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/home"> */}
    <NavLink className="navbar-brand logo" to="/">
      <img 
        src     = { Logo } 
        alt     = "TK's logo" 
        title   = "Home" 
        width   = "30%"
      />      
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item"> */}
          {/* <Link className="nav-link active" to="/about">About</Link> */}
          {/* <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li> */}
        <li className="nav-item">
          <NavLink 
            className="nav-link active" 
            to="/projects"
            data-toggle="collapse" 
            data-target=".navbar-collapse.show"
          >
            Projects
          </NavLink>
          {/* <a className="nav-link" href="/projects">Projects</a> */}
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/samples">Snippet Samples</NavLink>
          {/* <a className="nav-link" href="/samples">Snippet Samples</a> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a> */}
          {/* <Link className="nav-link" to="/contact">Contact</Link> */}
        {/* </li> */}
      </ul>
    </div>
  </div>
</nav>

      <Temp />
      <TempBackup />
    //   {/* <BootstrapHeader /> */}
    </div>
  );
}


export default Header;