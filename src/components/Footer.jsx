import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black-900 via-zinc-900 to-black-500 text-[#E0E0E0] py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          
          {/* Column 1: Brand & Social */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <h3 className="text-2xl lg:text-3xl font-bold group">
                <span className="text-white group-hover:text-gray-300 transition-colors duration-300">Roadworthy</span>
                <span className="text-[#7FFF00] group-hover:drop-shadow-[0_0_6px_#7FFF00] transition-all duration-300">Clinic</span>
              </h3>
            </Link>
            <p className="text-[#E0E0E0] text-sm mb-6 leading-relaxed">
              Your trusted partner for professional vehicle inspections, roadworthy certificates, and minor services in Brisbane. Ensuring your safety on the road.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#E0E0E0] hover:text-[#7FFF00] hover:drop-shadow-[0_0_5px_#7FFF00] transition-all duration-300">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#E0E0E0] hover:text-[#7FFF00] hover:drop-shadow-[0_0_5px_#7FFF00] transition-all duration-300">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#E0E0E0] hover:text-[#7FFF00] hover:drop-shadow-[0_0_5px_#7FFF00] transition-all duration-300">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-[#E0E0E0] hover:text-[#7FFF00] transition-colors duration-300 text-sm hover:underline hover:underline-offset-2">Home</Link></li>
              <li><Link to="/about" className="text-[#E0E0E0] hover:text-[#7FFF00] transition-colors duration-300 text-sm hover:underline hover:underline-offset-2">About Us</Link></li>
              <li><Link to="/services" className="text-[#E0E0E0] hover:text-[#7FFF00] transition-colors duration-300 text-sm hover:underline hover:underline-offset-2">Services</Link></li>
              <li><Link to="/booking" className="text-[#E0E0E0] hover:text-[#7FFF00] transition-colors duration-300 text-sm hover:underline hover:underline-offset-2">Booking</Link></li>
              <li><Link to="/contact" className="text-[#E0E0E0] hover:text-[#7FFF00] transition-colors duration-300 text-sm hover:underline hover:underline-offset-2">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services (Example) */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Our Services</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services/roadworthy-inspection" className="text-[#E0E0E0] hover:text-[#7FFF00] transition-colors duration-300 text-sm hover:underline hover:underline-offset-2">Roadworthy Inspection</Link></li>
              <li><Link to="/services/uber-coi" className="text-[#E0E0E0] hover:text-[#7FFF00] transition-colors duration-300 text-sm hover:underline hover:underline-offset-2">Uber COI</Link></li>
              <li><Link to="/services/battery-services" className="text-[#E0E0E0] hover:text-[#7FFF00] transition-colors duration-300 text-sm hover:underline hover:underline-offset-2">Battery Services</Link></li>
              <li><Link to="/services/truck-services" className="text-[#E0E0E0] hover:text-[#7FFF00] transition-colors duration-300 text-sm hover:underline hover:underline-offset-2">Truck Services</Link></li>
              <li><Link to="/services/rotors-machining" className="text-[#E0E0E0] hover:text-[#7FFF00] transition-colors duration-300 text-sm hover:underline hover:underline-offset-2">Rotors Machining</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                {/* Placeholder Map Icon */}
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#7FFF00] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                <span>123 Mechanic Lane, Brisbane, QLD 4000, Australia</span>
              </li>
              <li className="flex items-center text-sm">
                {/* Placeholder Phone Icon */}
                <svg className="w-5 h-5 mr-3 text-[#7FFF00] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                <a href="tel:+61712345678" className="hover:text-[#7FFF00] transition-colors duration-300">(07) 1234 5678</a>
              </li>
              <li className="flex items-center text-sm">
                {/* Placeholder Email Icon */}
                <svg className="w-5 h-5 mr-3 text-[#7FFF00] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                <a href="mailto:info@roadworthyclinic.com" className="hover:text-[#7FFF00] transition-colors duration-300">info@roadworthyclinic.com</a>
              </li>
            </ul>
            <p className="text-sm mt-4 text-[#E0E0E0]">
              <span className="font-semibold text-white">Hours:</span> Mon-Fri: 8am - 5pm
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-[#808080]">
            © <span id="currentYear">2024</span> Roadworthy Clinic. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/61469923495"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 bg-gradient-to-br from-green-600 to-green-300 hover:bg-gradient-to-tl  text-white p-3.5 rounded-full shadow-lg hover:shadow-[0_0_15px_#25D36] transition-all duration-300 transform hover:scale-110"
      >
        <i className="fab fa-whatsapp fa-2x"></i>
      </a>
    
      <script>
        document.getElementById('currentYear').textContent = new Date().getFullYear();
      </script>
    </footer>
  );
};

export default Footer;
