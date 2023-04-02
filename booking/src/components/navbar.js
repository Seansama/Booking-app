You can achieve this by conditionally rendering the "Help" button in the Navbar component based on the current path using the useLocation hook from the react-router-dom package.

Here's how you can modify the Navbar component code to achieve this:

jsx
Copy code
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("hidden");
  const [toggleIcon] = useState("block");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navToggle = () => {
    setActive(active === "hidden" ? "block" : "hidden");
  };

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showHelpButton = ["/home", "/admin", "/contact", "/about", "/booked"].includes(location.pathname.toLowerCase());

  return (
    <nav
      className={`fixed flex items-center flex-shrink-0 text-black  z-10 top-0 left-0 right-0 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-blue-500" : "bg-transparent"
      } px-8 py-4`}
    >
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <p className="font-semibold text-3xl tracking-tight">SUMMER HOTELS</p>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${active}`}
      >
        <div className="text-base lg:flex-grow lg:text-right mr-5">
          <Link
            Link
            to="/Home"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-green-100 rounded-full bg-white hover:bg-green-100 text-black font-semibold hover:text-black py-2 ml-4 px-4 border border-white rounded-full  mr-6"
          >
            Search
          </Link>
          <Link
            to="/Home"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-green-100 rounded-full bg-white hover:bg-green-100 text-black font-semibold hover:text-black py-2 ml-4 px-4 border border-white rounded-full  mr-6"
          >
            Home
          </Link>
          <Link
            to="/Admin"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-green-100 rounded-full bg-white hover:bg-green-100 text-black font-semibold hover:text-black py-2 ml-4 px-4 border border-white rounded-full  mr-6"
          >
            Admin
          </Link>
          <Link
            to="/Contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-green-100 rounded-full bg-white hover:bg-green-100 text-black font-semibold hover:text-black py-2 ml-4 px-4 border border-white rounded-full  mr-6  mr-6"
          >
            Contact
          </Link>
          <Link
            to="/About"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-green-100 rounded-full bg-white hover:bg-green-100 text-black font-semibold hover:text-black py-2 ml-4 px-4 border border-white rounded-full "
          >
            Help
          </Link>
        </div>
      </div>
      <div onClick={navToggle} className={`block lg:hidden ${toggleIcon}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path className="line1" d="M4 6h12v2H4zm0 5h12v2H4zm0 5h12v2H4z" />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
