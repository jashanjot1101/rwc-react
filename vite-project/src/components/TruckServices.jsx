import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import images
import heroImage from '../assets/images/truck-services.jpg';

// Import the CSS file for this page
import './TruckServices.css';

const AccordionItem = ({ title, children, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-darkGray/90 rounded-xl shadow-lg border border-neonGreen/10 fade-up card-glow"
      style={{ '--delay': delay }}
    >
      <button
        className="w-full flex justify-between items-center p-6 text-white font-bold text-xl focus:outline-none accordion-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
      >
        <span>{title}</span>
        <i className={`fas fa-chevron-down text-neonGreen accordion-icon ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div
        id={`accordion-content-${title.replace(/\s+/g, '-')}`}
        className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen p-6 pt-0' : 'max-h-0'}`}
      >
        <div className="text-gray-300">
            {children}
        </div>
      </div>
    </div>
  );
};


const TruckServices = () => {
  useEffect(() => {
    document.title = "Truck Services | Roadworthy Clinic";
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.style.getPropertyValue('--delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          // observer.unobserve(entry.target); // Optional
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-up, .scale-in');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate.forEach((el) => {
        if (el && observer) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const serviceOfferings = [
    { icon: "fas fa-truck-moving", title: "General Maintenance", description: "Routine servicing, oil changes (including CK4 oils), filter replacements, and preventative maintenance.", delay: "200ms" },
    { icon: "fas fa-clipboard-check", title: "Inspections & Compliance", description: "Roadworthy inspections, compliance checks, and preparation for regulatory requirements.", delay: "400ms" },
    { icon: "fas fa-truck-loading", title: "Brake & Suspension", description: "Expert service for heavy-duty braking systems and suspension components.", delay: "600ms" },
    { icon: "fas fa-cogs", title: "Engine & Drivetrain", description: "Diagnosis and repair for truck engines, transmissions, and drivetrain systems.", delay: "800ms" }
  ];

  const whyTrustUsData = [
    { icon: "fas fa-users-cog", title: "Experienced Technicians", description: "Our team has specialized experience in servicing a wide range of heavy vehicles.", delay: "200ms" },
    { icon: "fas fa-tools", title: "Specialized Equipment", description: "We use the right tools and equipment for heavy vehicle maintenance and repair.", delay: "400ms" },
    { icon: "fas fa-shield-alt", title: "Reliable Service", description: "We provide thorough and dependable service to keep your fleet running smoothly and safely.", delay: "600ms" }
  ];

  const accordionData = [
    {
      title: "Light & Medium Rigid Trucks",
      delay: "200ms",
      content: (
        <>
          <p>We provide comprehensive services for light and medium rigid trucks, ensuring they meet all safety and operational standards.</p>
          <ul className="mt-4 space-y-2 list-style-custom">
            <li>Routine servicing</li>
            <li>Brake system maintenance</li>
            <li>Suspension checks</li>
          </ul>
        </>
      )
    },
    {
      title: "Heavy Rigid & Articulated Trucks",
      delay: "400ms",
      content: (
        <>
          <p>Our facility is equipped to handle the complex needs of heavy rigid and articulated trucks, including engine, transmission, and chassis services.</p>
          <ul className="mt-4 space-y-2 list-style-custom">
            <li>Engine diagnostics & repair</li>
            <li>Drivetrain maintenance</li>
            <li>Heavy-duty brake service</li>
          </ul>
        </>
      )
    },
    {
      title: "Compliance Requirements",
      delay: "600ms",
      content: (
        <>
          <p>We assist with all necessary compliance requirements for heavy vehicles, including regular inspections and documentation.</p>
          <ul className="mt-4 space-y-2 list-style-custom">
            <li>Roadworthy certificates</li>
            <li>Regulatory checks</li>
            <li>Fleet compliance management support</li>
          </ul>
        </>
      )
    }
  ];


  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white text-center fade-up leading-tight drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
            Heavy Vehicle Services
          </h1>
          <p
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Comprehensive maintenance and inspection services for trucks and heavy vehicles.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-black/80 to-darkGray/90">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-xl max-w-2xl mx-auto fade-up  pricing-card-interactive">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
              <span className="text-white">Services Starting From: </span>
              <span className="text-neonGreen drop-shadow-glow">$400</span>
            </h2>
            <p className="text-gray-300 text-center mb-8 text-lg">
              Includes services with CK4 oils and comprehensive checks
            </p>
            <div className="flex justify-center">
              <Link
                to="/booking"
                className="bg-neonGreen hover:bg-white text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg uppercase"
              >
                Book Now <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="py-16 bg-gradient-to-b from-black-600 to-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Our Truck Service Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceOfferings.map((item, index) => (
              <div
                key={index}
                className="bg-darkGray/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 card-glow"
                style={{ '--delay': item.delay }}
              >
                <div className="text-center text-neonGreen mb-4">
                  <i className={`${item.icon} text-4xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white text-center tracking-tight">{item.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16 bg-gradient-to-t from-black-600 to-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Why Trust Us with Your Heavy Vehicle?
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {whyTrustUsData.map((item, index) => (
              <div
                key={index}
                className="bg-darkGray/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 card-glow"
                style={{ '--delay': item.delay }}
              >
                <div className="flex items-center mb-4">
                  <i className={`${item.icon} text-2xl text-neonGreen mr-4`}></i>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Vehicle Types & Compliance (Accordion) */}
      <section className="py-16 bg-gradient-to-b from-darkGray/90 to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Supported Vehicle Types & Compliance
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {accordionData.map((item, index) => (
              <AccordionItem key={index} title={item.title} delay={item.delay}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-darkGray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-neonGreen fade-up drop-shadow-neon">Need Truck Service?</h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Book your heavy vehicle service today to ensure performance and compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-up" style={{ '--delay': '400ms' }}>
            <Link
              to="/booking"
              className="bg-neonGreen text-black px-8 py-3 rounded-full font-bold hover:bg-white transition duration-300 uppercase"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-neonGreen text-neonGreen px-8 py-3 rounded-full font-bold hover:bg-neonGreen hover:text-black transition duration-300 uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TruckServices;
