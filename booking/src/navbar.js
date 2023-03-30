import React, {useState} from 'react'
import "/home/vincent/Projects/Group-hotel-app/src/components/navbar.css"

function Navbar() {
      const [active, setActive] = useState("nav__menu");
      const [toggleIcon, setToggleIcon] = useState("nav__toggler")

        const navToggle = () => {
          active === "nav__menu"
           ? setActive("nav__menu nav__active")
           : setActive("nav__menu")
        }
      
  return (
        <nav className="nav">
            <a href="#" className="nav__brand">
                SUMMER HOTELS
                </a>
            <ul className={active}>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Search
                </a>
                </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Home
                </a>
                </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Admin
                  </a>
                </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Contact
                  </a>
                </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  About
                  </a>
                  </li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;