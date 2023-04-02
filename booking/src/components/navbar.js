import React, { useState } from 'react';

function Navbar() {
  const [active, setActive] = useState('hidden');
  const [toggleIcon, setToggleIcon] = useState('block');
  const [scrolled, setScrolled] = useState(false);

  const navToggle = () => {
    setActive(active === 'hidden' ? 'block' : 'hidden');
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed flex items-center flex-shrink-0 text-black  z-10 top-0 left-0 right-0 transition-all duration-500 ease-in-out ${
      scrolled ? 'bg-blue-500' : 'bg-transparent'
    } px-8 py-4`}>
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <a href="#" className="font-semibold text-3xl tracking-tight">
          SUMMER HOTELS
        </a>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${active}`}>
        <div className="text-base lg:flex-grow lg:text-right mr-52">
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-6">
            Search
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-6">
            Home
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-6">
            Admin
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-6">
            Contact
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
            About
          </a>
        </div>
      </div>
      <div onClick={navToggle} className={`block lg:hidden ${toggleIcon}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path className="line1" d="M4 6h12v2H4zm0 5h12v2H4zm0 5h12v2H4z"/>
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
