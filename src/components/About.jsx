import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import images
import aboutHeroImage from '../assets/images/about.png';
import rwcImage from '../assets/images/rwc.png';
import ctaImage from '../assets/images/cta-img.jpg';

// Import the CSS file for the About Us page
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = "About Us | Roadworthy Clinic - Brisbane Vehicle Inspections";
    // Scroll animations using Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.style.getPropertyValue('--delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('bounce-in')) {
              entry.target.style.animationPlayState = 'running';
            }
          }, delay);
          // observer.unobserve(entry.target); // Uncomment if animation should only play once
        } else {
          // Optional: Reset animation if element goes out of view
          // entry.target.classList.remove('visible');
          // if (entry.target.classList.contains('bounce-in')) {
          //   entry.target.style.animationPlayState = 'paused';
          // }
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
      '.fade-up, .scale-in, .bounce-in, .about-image' // Include .about-image for its specific animation
    );

    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elementsToAnimate.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 md:mb-10 text-white text-center fade-up drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
            About Roadworthy Clinic
          </h1>
          <p
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12 fade-up"
            style={{ '--delay': '200ms' }}
          >
            Your trusted partner in automotive excellence, providing comprehensive vehicle inspections and safety certificates in Brisbane.
          </p>
        </div>
      </section>

      {/* Business Story Section */}
      <section className="py-24 md:py-32 bg-darkGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="fade-up py-4" style={{ '--delay': '0ms' }}>
              <h2 className="text-3xl font-bold mb-8 text-white">Our Story</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Roadworthy Clinic was established with a vision to provide reliable and professional vehicle inspection services in Brisbane.
                Our commitment to excellence and customer satisfaction has made us a trusted name in the automotive industry.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Led by Aman Nitika, a certified professional with extensive experience in automotive inspections,
                we take pride in our thorough approach and attention to detail in every inspection we perform.
              </p>
            </div>
            <div className="fade-up py-4" style={{ '--delay': '200ms' }}>
              <img src={rwcImage} alt="Roadworthy Clinic Certificate Focus" className="rounded-lg w-full h-auto shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-neonGreen fade-up drop-shadow-neon">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Value Card 1 */}
            <div className="bg-darkGray p-8 rounded-lg card-glow transition duration-300 fade-up text-center" style={{ '--delay': '0ms' }}>
              <i className="fas fa-heart text-neonGreen text-4xl mb-6"></i>
              <h3 className="text-xl font-bold mb-4 text-white">Integrity</h3>
              <p className="text-gray-400">We believe in honest assessments and transparent pricing. No hidden fees, no unnecessary certifications.</p>
            </div>
            {/* Value Card 2 */}
            <div className="bg-darkGray p-8 rounded-lg card-glow transition duration-300 fade-up text-center" style={{ '--delay': '200ms' }}>
              <i className="fas fa-tools text-neonGreen text-4xl mb-6"></i>
              <h3 className="text-xl font-bold mb-4 text-white">Excellence</h3>
              <p className="text-gray-400">Our team maintains the highest standards in vehicle inspections and customer service.</p>
            </div>
            {/* Value Card 3 */}
            <div className="bg-darkGray p-8 rounded-lg card-glow transition duration-300 fade-up text-center" style={{ '--delay': '400ms' }}>
              <i className="fas fa-users text-neonGreen text-4xl mb-6"></i>
              <h3 className="text-xl font-bold mb-4 text-white">Community</h3>
              <p className="text-gray-400">We're proud to serve the Brisbane community with reliable inspection services they can trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours and Contact Section */}
      <section className="py-24 md:py-32 bg-darkGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Operating Hours */}
            <div className="bg-black p-8 md:p-10 rounded-lg card-glow fade-up" style={{ '--delay': '0ms' }}>
              <h2 className="text-3xl font-bold mb-8 text-white">Operating Hours</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Monday - Friday</span>
                  <span className="text-neonGreen font-medium">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Saturday</span>
                  <span className="text-neonGreen font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
            {/* Contact Information */}
            <div className="bg-black p-8 md:p-10 rounded-lg card-glow fade-up" style={{ '--delay': '200ms' }}>
              <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-300">
                  <i className="fas fa-map-marker-alt text-neonGreen text-xl"></i>
                  <span>123 Brisbane Street, Brisbane, QLD 4000</span> {/* Placeholder Address */}
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <i className="fas fa-phone text-neonGreen text-xl"></i>
                  <a href="tel:0712345678" className="hover:text-neonGreen">07 1234 5678</a> {/* Placeholder Phone */}
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <i className="fas fa-envelope text-neonGreen text-xl"></i>
                  <a href="mailto:info@roadworthyclinic.com.au" className="hover:text-neonGreen">info@roadworthyclinic.com.au</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-28 md:py-36 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50"></div> {/* Increased opacity for better text readability */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-neonGreen scale-in drop-shadow-neon">
            Ready to Get Started?
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto fade-up"
            style={{ '--delay': '200ms' }}
          >
            Book your vehicle inspection today and experience our professional service.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-neonGreen text-black px-8 py-4 rounded-full font-bold hover:bg-white transition duration-300 bounce-in uppercase"
            style={{ '--delay': '400ms' }}
          >
            Schedule Inspection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
