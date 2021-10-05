import Logo from "../graphics/logo192.png";
import HamburguerGreen from "../graphics/hamburguer-green.png";
import HamburguerRed from "../graphics/hamburguer-red.png";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import BurguerMenu from "./BurguerMenu.js";

// it defines the minumum width's screen to show the burguer option
const minimumWidth = 750;

const screenWidth = window.innerWidth; // it gets screen width

function Header() {
  // console.log("screenWidth", screenWidth);

  const [
    burguerON, 
    setBurguerON] = useState(screenWidth > minimumWidth ? true : false);

  const LargeScreenHeader = () => (
    <>
      <div className="one-3rd">
        <div className="one-3rd-1">
          { (!burguerON) &&
            <BurguerMenu />
          }
        </div>
        <div className="one-3rd-2">
          <div 
            className= {`logo ${!burguerON ? "logo--green" : "logo--red"}`}
          >
            <img
              src={!burguerON ? HamburguerGreen : HamburguerRed}
              alt="Turn Hamburguer menu ON and OFF"
              title={
                burguerON
                ? "Turn Hamburguer Menu ON"
                : "Turn Hamburguer Menu OFF"
              }
              width="100%"
              onClick={ () => setBurguerON(!burguerON) }
            />
          </div>
        </div>
      </div>

      <div className="two-3rd d-flex">
        <div className="two-3rd-1">
          <div 
            className="logo"
          >
            <Link 
              to              = "/" 
              // exact           = {true}
              // className       = "nav-link logo"
              // activeClassName = "active-link"
            >
              <img 
                src     = { Logo } 
                alt     = "TK's logo" 
                title   = "Home" 
                width   = "100%"
              />
            </Link>
          </div>
        </div>

        <div className="nav two-3rd-2">
          <div className="whereru">
            { !burguerON &&
              <div className="whereru">
                <WhereRU className="whereru" />
              </div>
            }
          </div>
          
          { burguerON &&
            <div className="text-items">
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
                Snippets
              </NavLink>
              
              <NavLink
                to              = "/contact"
                className       = "nav-link"
                activeClassName = "active-link"
              >
                Contact
              </NavLink>
            </div>
          }
        </div>
      </div>
    </>
  );

  const ThinScreenHeader = () => (
    <>
      <div className="one-3rd"></div>

      <div className="two-3rd">
        <BurguerMenu />

        <div className="whereru">
          <WhereRU className="whereru" />
        </div>

        <div className="logo-mobile">
          <Link to="/">
            <img 
              src     = { Logo } 
              alt     = "TK's logo" 
              title   = "Home" 
              width   = "100%"
            />
          </Link>
        </div>
      </div>

      <div className="three-3rd"></div>
    </>
  );


  const WhereRU = () => {
    const currentLocation = useLocation().pathname;
    // const currentLocation = window.location.pathname;
    let label = "";
    if (currentLocation === "/")
      label = "/Home";
    else if (currentLocation === "/about")
      label = "/About";
    else if (currentLocation === "/projects")
      label = "/Projects";
    else if (currentLocation === "/samples")
      label = "/Snippets";
    else if (currentLocation === "/contact")
      label = "/Contact"

    return label;
  };


  return(
    <div className="header d-flex sticky-top">
      { screenWidth > minimumWidth
        ?
          <LargeScreenHeader />
        :
          <ThinScreenHeader />
      }
    </div>
  );
}


export default Header;