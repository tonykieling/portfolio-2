import Logo from "../graphics/logo192.png";
import ToTurnOn from "../graphics/hamburguer.png";
import ToTurnOff from "../graphics/hamburguer-banned.png";
import { NavLink, Link } from "react-router-dom";
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

  return(
    <div className="header">
      <div className="one-3rd">
        { ((screenWidth < minimumWidth) || !burguerON) &&
          <BurguerMenu />
        }
      </div>

      <div className="two-3rd">
        <div className="two-3rd-1">
          <div 
            className="logo"
          >
            <NavLink 
              to              = "/" 
              exact           = {true}
              className       = "nav-link logo"
              // activeClassName = "active-link"
            >
              <img 
                src     = { Logo } 
                alt     = "TK's logo" 
                title   = "Home" 
                width   = "100%"
              />
            </NavLink>
          </div>
        </div>


        { (screenWidth > minimumWidth) &&
            <div className="nav two-3rd-2">
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
        }


      </div>

      <div className="three-3rd">
        { (screenWidth > minimumWidth) &&
          <div className="logo">
            <img
              src={burguerON ? ToTurnOn : ToTurnOff}
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
        }
      </div>

    </div>
  );
}


export default Header;