import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming react-router-dom is installed and configured

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // For the main mobile menu
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For desktop services dropdown
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // For mobile services dropdown
  const [desktopServicesTimeoutId, setDesktopServicesTimeoutId] = useState(null); // For desktop services dropdown close delay

  // Toggles the main mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // If the main mobile menu is being closed, also close the mobile services submenu
    if (isMobileServicesOpen && isOpen) { // Note: isOpen is the state *before* toggle
      setIsMobileServicesOpen(false);
    }
  };

  // Toggles the desktop services dropdown
  const toggleServicesMenu = () => {
    if (desktopServicesTimeoutId) {
      clearTimeout(desktopServicesTimeoutId);
      setDesktopServicesTimeoutId(null);
    }
    setIsServicesOpen(!isServicesOpen);
  };

  // Handlers for desktop services dropdown with delay
  const handleMouseEnterServices = () => {
    if (desktopServicesTimeoutId) {
      clearTimeout(desktopServicesTimeoutId);
      setDesktopServicesTimeoutId(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    const timeoutId = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 0.2s delay
    setDesktopServicesTimeoutId(timeoutId);
  };

  // Toggles the mobile services dropdown
  const toggleMobileServicesMenu = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Closes all menus - useful for navigation links
  const closeMenus = () => {
    setIsOpen(false);
    if (desktopServicesTimeoutId) {
      clearTimeout(desktopServicesTimeoutId);
      setDesktopServicesTimeoutId(null);
    }
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  useEffect(() => {
    // Clear timeout when component unmounts or isServicesOpen changes preventing delayed state updates on closed menu
    return () => {
      if (desktopServicesTimeoutId) {
        clearTimeout(desktopServicesTimeoutId);
      }
    };
  }, [desktopServicesTimeoutId]);

  const subServices = [
    { name: 'Roadworthy Inspection', path: '/services/roadworthy-inspection' },
    { name: 'Uber COI', path: '/services/uber-coi' },
    { name: 'Rotors Machining', path: '/services/rotors-machining' },
    { name: 'New Battery Supply & Fitting', path: '/services/battery-services' },
    { name: 'Truck Services', path: '/services/truck-services' },
  ];

  const headerComponent = (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg text-white shadow-lg shadow-[#7FFF00]/20">
      <div className="container mx-auto flex items-center justify-between p-3 md:px-6 md:py-5">
        <a href="/" className="text-lg sm:text-xl md:text-3xl font-bold group" onClick={closeMenus}>
          <span className="text-white group-hover:text-gray-300 transition-colors duration-300">Roadworthy</span>
          <span className="text-[#7FFF00] group-hover:drop-shadow-[0_0_6px_#7FFF00] transition-all duration-300">Clinic</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5 lg:space-x-6 items-center">
          <Link to="/" className="px-3 py-1.5 rounded-md text-gray-300 hover:text-[#7FFF00] transition-all duration-300 font-sans text-base font-light hover:drop-shadow-[0_0_6px_#7FFF00] hover:bg-white/10 hover:-translate-y-px" onClick={closeMenus}>Home</Link>
          <Link to="/about" className="px-3 py-1.5 rounded-md text-gray-300 hover:text-[#7FFF00] transition-all duration-300 font-sans text-base font-light hover:drop-shadow-[0_0_6px_#7FFF00] hover:bg-white/10 hover:-translate-y-px" onClick={closeMenus}>About</Link>
          
          {/* Desktop Services Menu Item */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            {/* This div groups the Link and SVG, applying shared styles and hover effects */}
            <div
              className="flex items-center px-3 py-1.5 rounded-md text-gray-300 transition-all duration-300 font-sans text-base font-light hover:text-[#7FFF00] hover:drop-shadow-[0_0_6px_#7FFF00] hover:bg-white/10 hover:-translate-y-px"
            >
              <Link
                to="/services" // Navigate to services page
                className="text-inherit" // Inherits text color from parent div
                onClick={() => {
                  if (desktopServicesTimeoutId) {
                    clearTimeout(desktopServicesTimeoutId);
                    setDesktopServicesTimeoutId(null);
                  }
                  setIsServicesOpen(false); // Close dropdown on navigation
                  // closeMenus(); // Optional: if other menus could be open and need closing
                }}
              >
                Services
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent any parent handlers
                  toggleServicesMenu(); // Toggle dropdown on SVG click
                }}
                className="ml-1 text-inherit focus:outline-none" // Inherits text color, minimal styling
                aria-label="Toggle services submenu"
              >
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>

            {/* Desktop Services Dropdown */}
            {isServicesOpen && (
              <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-black/90 backdrop-blur-md ring-1 ring-black ring-opacity-5 z-50 py-1">
                {subServices.map(service => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-[#7FFF00] hover:bg-white/10 transition-all duration-200"
                    onClick={() => {
                      if (desktopServicesTimeoutId) {
                        clearTimeout(desktopServicesTimeoutId);
                        setDesktopServicesTimeoutId(null);
                      }
                      setIsServicesOpen(false); // Close this dropdown when a sub-item is clicked
                      // closeMenus(); // Optional: if full reset is needed
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="px-3 py-1.5 rounded-md text-gray-300 hover:text-[#7FFF00] transition-all duration-300 font-sans text-base font-light hover:drop-shadow-[0_0_6px_#7FFF00] hover:bg-white/10 hover:-translate-y-px" onClick={closeMenus}>Contact</Link>
          <Link to="/booking" className="ml-2 bg-[#7FFF00] text-black px-5 py-2.5 rounded-md font-bold text-sm uppercase hover:bg-opacity-90 transition-all duration-300 hover:shadow-[0_0_10px_#7FFF00] transform hover:scale-105" onClick={closeMenus}>
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Area */}
        <div className="md:hidden flex items-center">
          <Link 
            to="/booking" 
            className="bg-[#7FFF00] text-black px-3 py-1.5 rounded-md font-bold text-xs uppercase hover:bg-opacity-90 transition-all duration-300 hover:shadow-[0_0_8px_#7FFF00] transform hover:scale-105 mr-2 flex items-center justify-center text-center"
            onClick={closeMenus}
          >
            Book Now
          </Link>
          <button
            onClick={toggleMenu} // Toggles the main mobile menu
            className="text-2xl text-white focus:outline-none hover:text-[#7FFF00] transition-colors duration-300 p-1"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Dropdown) */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-zinc-800/98 backdrop-blur-sm  shadow-lg shadow-[#7FFF00]/10 transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
        <nav className="flex flex-col items-start space-y-3 py-4 border-t border-gray-800 ">
          <Link to="/" className="block w-full text-left px-4 py-2.5 text-base text-gray-200 hover:text-[#7FFF00] transition-all duration-300 hover:drop-shadow-[0_0_6px_#7FFF00] hover:bg-white/10 rounded-md tb-border" onClick={closeMenus}>Home</Link>
          <Link to="/about" className="block w-full text-left px-4 py-2.5 text-base text-gray-200 hover:text-[#7FFF00] transition-all duration-300 hover:drop-shadow-[0_0_6px_#7FFF00] hover:bg-white/10 rounded-md tb-border" onClick={closeMenus}>About</Link>
          
          {/* Mobile Services Menu Item */}
          <div className="w-full">
            {/* This div groups the Link and SVG button for mobile services */}
            <div className="flex items-center justify-between w-full px-4 py-2.5 text-base text-gray-200 rounded-md hover:bg-white/10 hover:text-[#7FFF00] hover:drop-shadow-[0_0_6px_#7FFF00] transition-all duration-300 tb-border">
              <Link
                to="/services" // Navigate to services page
                className="flex-grow text-left" // Text color will be affected by parent hover
                onClick={closeMenus} // Close all menus on navigation
              >
                Services
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent any parent handlers
                  toggleMobileServicesMenu(); // Toggle mobile services dropdown
                }}
                className="ml-2 p-1 service-toggle-icon" // Text color will be affected by parent hover
                aria-label="Toggle services submenu"
              >
                {isMobileServicesOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" /></svg> 
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                )}
              </button>
            </div>

            {/* Mobile Services Sub-menu Dropdown */}
            <div 
              className={`overflow-hidden bg-zinc-900/70 flex flex-col items-center w-full mt-1 rounded-md transition-all ease-in-out duration-300 ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              {subServices.map(service => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-[#7FFF00] transition-all duration-200 hover:bg-white/20 rounded-md"
                  onClick={closeMenus} // Close all menus on sub-item click
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" className="block w-full text-left px-4 py-2.5 text-base text-gray-200 hover:text-[#7FFF00] transition-all duration-300 hover:drop-shadow-[0_0_6px_#7FFF00] hover:bg-white/10 rounded-md tb-border" onClick={closeMenus}>Contact</Link>
        </nav>
      </div>
    </header>
  );

  return headerComponent;
};

export default NavBar;
