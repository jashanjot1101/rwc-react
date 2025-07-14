import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import images
import heroImage from '../assets/images/battery-services.jpg';

// Import the CSS file for this page
import './BatteryServices.css';

const BatteryServices = () => {
  useEffect(() => {
    document.title = "Battery Services | Roadworthy Clinic";
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

  const whyChooseUsData = [
    { icon: 'fas fa-battery-full', title: 'Expert Testing', description: 'Accurate battery health checks and diagnostic services.', delay: '200ms' },
    { icon: 'fas fa-car', title: 'Quality Batteries', description: 'Supply of reliable batteries for various makes and models.', delay: '400ms' },
    { icon: 'fas fa-wrench', title: 'Professional Fitting', description: 'Safe and efficient installation by experienced technicians.', delay: '600ms' }
  ];

  const serviceProcessData = [
    { step: 1, title: 'Battery Check', description: "We test your current battery's health and performance.", delay: '200ms' },
    { step: 2, title: 'Selection & Supply', description: 'We help you choose the right battery and supply it.', delay: '400ms' },
    { step: 3, title: 'Fitting & Final Check', description: 'Expert installation and a final system check.', delay: '600ms' }
  ];

  const faqData = [
    {
      question: "How often should I have my battery checked?",
      answer: "It's recommended to have your battery tested annually, especially before the start of extreme weather seasons (hot or cold).",
      delay: "200ms"
    },
    {
      question: "What are the signs of a failing battery?",
      answer: "Slow engine crank, dashboard warning lights, dimming headlights when idling, or a swollen battery case can indicate a failing battery.",
      delay: "400ms"
    },
    {
      question: "How long does a new battery last?",
      answer: "Battery lifespan varies based on type, climate, and vehicle usage, but typically ranges from 3 to 5 years.",
      delay: "600ms"
    },
    {
      question: "Do you recycle old batteries?",
      answer: "Yes, we responsibly recycle old vehicle batteries.",
      delay: "800ms"
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
            New Battery Supply & Fitting
          </h1>
          <p
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Reliable battery solutions and expert fitting to keep your vehicle starting strong.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-black/80 to-darkGray/90">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-xl max-w-2xl mx-auto fade-up card-glow pricing-card-interactive">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
              <span className="text-white">Batteries Starting From: </span>
              <span className="text-neonGreen drop-shadow-glow">$150</span>
            </h2>
            <p className="text-gray-300 text-center mb-8 text-lg">
              Includes battery supply, fitting, and system check
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-darkGray/90 to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Why Choose Our Battery Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className="bg-darkGray/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 card-glow"
                style={{ '--delay': item.delay }}
              >
                <div className="text-center text-neonGreen mb-4">
                  <i className={`$item.icon} text-4xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white text-center tracking-tight">{item.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-gradient-to-b from-black/80 to-darkGray/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Our Battery Service Process
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceProcessData.map((item, index) => (
              <div
                key={index}
                className="bg-darkGray/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/20 card-glow"
                style={{ '--delay': item.delay }}
              >
                <div className="text-center text-neonGreen mb-4">
                  <span className="text-4xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white text-center">{item.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-darkGray/90 to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up drop-shadow-neon">
            Frequently Asked Questions - Battery Services
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-darkGray/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 card-glow"
                style={{ '--delay': faq.delay }}
              >
                <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-darkGray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-neonGreen fade-up drop-shadow-neon">Need a New Battery?</h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Don't get stranded. Get your battery tested or replaced today.
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

export default BatteryServices;
