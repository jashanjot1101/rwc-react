import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import serviceHeroImage from '../assets/images/service.jpg';
import roadworthyInspectionImage from '../assets/images/roadworthy-inspection.jpg';
import uberCoiImage from '../assets/images/uber-coi.webp';
import rotorsMachiningImage from '../assets/images/rotors-machining.jpg';
import batteryServicesImage from '../assets/images/battery-services.jpg';
import truckServicesImage from '../assets/images/truck-services.jpg';
import ctaManImage from '../assets/images/cta-man.png';

// Import the CSS file for the services page
import './Services.css';

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | Roadworthy Clinic";
    // Scroll animations using Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a small delay before adding the visible class based on --delay CSS variable
          const delay = parseInt(entry.target.style.getPropertyValue('--delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
            // For bounce-in, also start the animation (if used on this page)
            if (entry.target.classList.contains('bounce-in')) {
              entry.target.style.animationPlayState = 'running';
            }
          }, delay);
          // Optionally, unobserve if the animation should only happen once
          // observer.unobserve(entry.target);
        } else {
          // Optional: remove 'visible' class when element is out of view if animations should reset
          // entry.target.classList.remove('visible');
          // if (entry.target.classList.contains('bounce-in')) {
          //   entry.target.style.animationPlayState = 'paused';
          // }
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes when the component mounts
    const elementsToAnimate = document.querySelectorAll(
      '.fade-up, .scale-in, .bounce-in' // Select relevant classes on this page
    );

    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup observer on component unmount
    return () => {
      elementsToAnimate.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceHeroImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/70"></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white text-center fade-up drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
            Our Services
          </h1>
          <p
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12 fade-up"
            style={{ '--delay': '200ms' }}
          >
            Comprehensive automotive services delivered by certified professionals with state-of-the-art equipment
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-darkGray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Roadworthy Inspection Card */}
            <div
              className="relative p-8 rounded-lg glass-effect-primary fade-up bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${roadworthyInspectionImage})`, '--delay': '0ms' }}
            >
              <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-neonGreen text-4xl mb-6">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Roadworthy Inspection</h3>
                <p className="text-gray-200 mb-6">Thorough roadworthy inspections to ensure your vehicle meets all
                  safety standards and regulations.</p>
                <ul className="text-gray-200 mb-6 space-y-2">
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Comprehensive safety checks</li>
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>State compliance</li>
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Detailed reports</li>
                </ul>
                {/* Keeping <a> as per template, but could be <Link> if routes exist */}
                <Link
                  to="/services/roadworthy-inspection"
                  className="inline-block bg-neonGreen text-black px-6 py-2 rounded-full font-bold hover:bg-white transition duration-300 uppercase"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Uber COI Card */}
            <div
              className="relative p-8 rounded-lg glass-effect-primary fade-up bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${uberCoiImage})`, '--delay': '200ms' }}
            >
              <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-neonGreen text-4xl mb-6">
                  <i className="fas fa-taxi"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Uber COI</h3>
                <p className="text-gray-200 mb-6">Certificate of Inspection services for Uber drivers to maintain
                  compliance with ride-sharing requirements.</p>
                <ul className="text-gray-200 mb-6 space-y-2">
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Uber compliance</li>
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Quick turnaround</li>
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Digital records</li>
                </ul>
                {/* Keeping <a> as per template, but could be <Link> if routes exist */}
                <Link
                  to="/services/uber-coi"
                  className="inline-block bg-neonGreen text-black px-6 py-2 rounded-full font-bold hover:bg-white transition duration-300 uppercase"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Rotors Machining Card */}
            <div
              className="relative p-8 rounded-lg glass-effect-primary fade-up bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${rotorsMachiningImage})`, '--delay': '400ms' }}
            >
              <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-neonGreen text-4xl mb-6">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Rotors Machining</h3>
                <p className="text-gray-200 mb-6">Precision rotor machining services to restore braking performance and
                  extend rotor life.</p>
                <ul className="text-gray-200 mb-6 space-y-2">
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Brake rotor resurfacing</li>
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Precision machining</li>
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Quality assurance</li>
                </ul>
                {/* Keeping <a> as per template, but could be <Link> if routes exist */}
                <Link
                  to="/services/rotors-machining"
                  className="inline-block bg-neonGreen text-black px-6 py-2 rounded-full font-bold hover:bg-white transition duration-300 uppercase"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* New Battery Supply & Fitting Card */}
            <div
              className="relative p-8 rounded-lg glass-effect-primary fade-up bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${batteryServicesImage})`, '--delay': '600ms' }}
            >
              <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-neonGreen text-4xl mb-6">
                  <i className="fas fa-battery-full"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">New Battery Supply & Fitting</h3>
                <p className="text-gray-200 mb-6">Professional battery replacement services with quality batteries and
                  expert installation.</p>
                <ul className="text-gray-200 mb-6 space-y-2">
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Battery testing</li>
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Quality batteries</li>
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Expert installation</li>
                </ul>
                {/* Keeping <a> as per template, but could be <Link> if routes exist */}
                <Link
                  to="/services/battery-services"
                  className="inline-block bg-neonGreen text-black px-6 py-2 rounded-full font-bold hover:bg-white transition duration-300 uppercase"
                >
                  Learn More
                </Link>
              </div>
            </div>

             {/* Truck Services Card */}
            <div
              className="relative p-8 rounded-lg glass-effect-primary fade-up bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${truckServicesImage})`, '--delay': '800ms' }}
            >
              <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-neonGreen text-4xl mb-6">
                  <i className="fas fa-truck"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Truck Services</h3>
                <p className="text-gray-200 mb-6">Specialized services for trucks and commercial vehicles, including
                  maintenance and repairs.</p>
                <ul className="text-gray-200 mb-6 space-y-2">
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Heavy vehicle maintenance</li>
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Commercial vehicle repairs</li>
                  <li><i className="fas fa-check text-neonGreen mr-2"></i>Fleet services</li>
                </ul>
                {/* Keeping <a> as per template, but could be <Link> if routes exist */}
                <Link
                  to="/services/truck-services"
                  className="inline-block bg-neonGreen text-black px-6 py-2 rounded-full font-bold hover:bg-white transition duration-300 uppercase"
                >
                  Learn More
                </Link>
              </div>
            </div>

             {/* Placeholder Card (as there are only 5 in the template but the grid is 3x3) */}
             {/* You might want to add more services or adjust grid */}
             
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
          {/* Flex Container for Content and Image */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 md:gap-6">
            {/* Content Block (Text and Buttons) */}
            <div className="text-center md:text-left md:w-1/2 lg:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-neonGreen scale-in drop-shadow-[0_0_6px_rgba(127,255,0,0.4)]">
                  Ready to Book a Service?
              </h2>
              <p
                  className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 fade-up"
                  style={{ '--delay': '200ms' }}
              >
                  Schedule your appointment today and experience our premium auto services.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start fade-up" style={{ '--delay': '400ms' }}>
                  {/* Using Link for internal navigation */}
                  <Link
                      to="/booking"
                      className="inline-block bg-neonGreen text-black px-8 py-3 rounded-full font-bold hover:bg-white transition duration-300 bounce-in uppercase"
                  >
                      Schedule Service
                  </Link>
                  {/* Keeping <a> for potential external link or different page */}
                   <a
                      href="/quote" // Consider changing this to a proper route if implemented
                      className="inline-block border-2 border-neonGreen text-neonGreen px-8 py-3 rounded-full font-bold hover:bg-neonGreen hover:text-black transition duration-300 bounce-in uppercase"
                      style={{ '--delay': '600ms' }} // Added delay for stagger effect
                  >
                      Get Quote
                  </a>
              </div>
            </div>

            {/* Image Block */}
            <div className="w-full max-w-sm sm:max-w-md md:w-1/2 md:max-w-none lg:w-auto lg:max-w-lg mx-auto mt-12 md:mt-0 fade-up" style={{ '--delay': '800ms' }}>
                   <img
                      src={ctaManImage}
                      alt="Professional Auto Service"
                      className="w-full h-auto rounded-lg shadow-2xl"
                   />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
