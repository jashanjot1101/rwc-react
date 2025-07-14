import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import images - assuming these are in your assets folder
import heroImage from '../assets/images/rotors-machining.jpg';

// Import the CSS file for this page
import './RotorsMachining.css';

const RotorsMachining = () => {
  useEffect(() => {
    document.title = "Rotors Machining | Roadworthy Clinic";
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

  const faqData = [
    {
      question: "When should I consider rotors machining?",
      answer: "You should consider machining if you experience brake pedal pulsation, squeaking, or visible scoring/grooves on the rotor surface, provided the rotors are still within minimum thickness specifications.",
      delay: "200ms"
    },
    {
      question: "How long does rotors machining take?",
      answer: "The time required can vary depending on the vehicle and the condition of the rotors, but typically it adds about 1-2 hours to a brake service.",
      delay: "400ms"
    },
    {
      question: "Is machining always an option?",
      answer: "No, rotors can only be machined if they are thicker than the manufacturer's minimum thickness specification. If they are too thin or severely damaged, replacement is necessary.",
      delay: "600ms"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white text-center fade-up leading-tight drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
            Rotors Machining
          </h1>
          <p
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Precision machining to restore your brake rotors for optimal braking performance and longevity.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-black/80 to-darkGray/90">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-xl max-w-2xl mx-auto fade-up card-glow pricing-card pricing-card-interactive">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
              <span className="text-white">Starting From: </span>
              <span className="text-neonGreen drop-shadow-glow">$80</span>
            </h2>
            <p className="text-gray-300 text-center mb-8 text-lg">
              Price per rotor, includes inspection and precision machining
            </p>
            <div className="flex justify-center">
              <Link
                to="/booking"
                className="bg-neonGreen hover:bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-lg uppercase book-now-button"
              >
                Book Now <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-darkGray/90 to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Benefits of Rotors Machining
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-darkGray/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 card-glow benefit-card"
              style={{ '--delay': '200ms' }}
            >
              <h3 className="text-xl font-bold mb-4 text-white tracking-tight">Enhanced Performance</h3>
              <ul className="space-y-3">
                {[
                  'Restores smooth braking surface',
                  'Reduces brake pedal pulsation and vibration',
                  'Improves overall stopping power'
                ].map(item => (
                  <li key={item} className="flex items-center text-gray-300 mb-3">
                    <i className="fas fa-check-circle text-neonGreen mr-3"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-darkGray/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 card-glow benefit-card"
              style={{ '--delay': '400ms' }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">Extended Lifespan & Value</h3>
              <ul className="space-y-3">
                {[
                  'Extends the life of brake pads and rotors',
                  'More cost-effective than full rotor replacement (if within tolerance)',
                  'Ensures even wear across the brake system'
                ].map(item => (
                  <li key={item} className="flex items-center text-gray-300 mb-3">
                    <i className="fas fa-check-circle text-neonGreen mr-3"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gradient-to-br from-black-900 via-zinc-800 to-black-800">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Our Rotors Machining Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative timeline-container">
              {/* Vertical line is centered on desktop, left-aligned on mobile */}
              <div className=" verticlal-line absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-gradient-to-b from-neonGreen via-neonGreen/70 to-neonGreen/30 transform md:-translate-x-1/2 timeline-line rounded-full"></div>
              <div className="space-y-16 md:space-y-24">
                {[
                  { icon: 'fas fa-car', title: 'Vehicle Assessment', desc: 'Inspect braking system and remove rotors from the vehicle.', delay: '200ms', align: 'left' },
                  { icon: 'fas fa-tools', title: 'Precision Machining', desc: 'Rotors are mounted on a lathe and resurfaced to a smooth finish.', delay: '400ms', align: 'right' },
                  { icon: 'fas fa-check-double', title: 'Reassembly & Testing', desc: 'Cleaned rotors are reinstalled and braking system is tested.', delay: '600ms', align: 'left' }
                ].map((step, index) => (
                  <div key={step.title} className={`relative pl-12 md:pl-0 fade-up timeline-item`} style={{ '--delay': step.delay }}>
                    {/* Dot is positioned relative to the left edge on mobile, centered on desktop */}
                    <div className="absolute left-0 md:left-1/2 top-8 md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-neonGreen rounded-full shadow-glow flex items-center justify-center timeline-dot">
                      <span className="text-black font-bold text-lg md:text-xl">{index + 1}</span>
                    </div>
                    {/* Content wrapper uses half-width and margin/padding for positioning on desktop */}
                    <div className={`timeline-content-wrapper ml-6 md:ml-0 md:w-1/2 ${step.align === 'left' ? 'md:pr-12 md:ml-auto md:translate-x-2' : 'md:pl-12 md:-translate-x-3.5'}`}>
                      <div className="bg-gradient-to-br from-darkGray/90 to-black p-6 md:p-8 rounded-xl shadow-xl border border-neonGreen/20 hover:border-neonGreen/40 card-glow timeline-card transition-all duration-300">
                        <div className="w-full">
                          {/* Flex items for icon and title are always row, icon has right margin */}
                          <div className={`flex items-center mb-5`}>
                            <div className="p-3 bg-darkGray/50 rounded-full mr-4 border border-neonGreen/30 shadow-glow">
                              <i className={`${step.icon} text-2xl md:text-3xl text-neonGreen`}></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-neonGreen drop-shadow-neon">{step.title}</h3>
                          </div>
                          <p className="text-gray-300 text-left text-base md:text-lg leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-darkGray/90 to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up drop-shadow-neon">
            Frequently Asked Questions - Rotors Machining
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-darkGray/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 card-glow faq-item"
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
          <h2 className="text-4xl font-bold mb-8 text-neonGreen fade-up drop-shadow-neon">Need Your Rotors Machined?</h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Restore your braking performance with our precision rotors machining service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-up" style={{ '--delay': '400ms' }}>
            <Link
              to="/booking"
              className="bg-neonGreen text-black px-8 py-3 rounded-full font-bold hover:bg-white uppercase cta-button"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-neonGreen text-neonGreen px-8 py-3 rounded-full font-bold hover:bg-neonGreen hover:text-black uppercase cta-button"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RotorsMachining;
