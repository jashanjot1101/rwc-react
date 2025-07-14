import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import images - assuming these are in your assets folder
import heroImage from '../assets/images/uber-coi.webp'; // Using the webp format as referenced in Services.jsx
import inspectionImage from '../assets/images/roadworthy-inspection.jpg'; // Reusing existing image

// Import the CSS file for this page
import './UberCOI.css';

const UberCOI = () => {
  useEffect(() => {
    document.title = "Uber COI | Roadworthy Clinic";
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
      question: "How long does an Uber COI inspection take?",
      answer: "A typical Uber COI inspection takes approximately 45-60 minutes.",
      delay: "200ms"
    },
    {
      question: "What documents are required for an Uber COI?",
      answer: "You will need your vehicle registration and proof of insurance. Specific local requirements may vary.",
      delay: "400ms"
    },
    {
      question: "What if my vehicle doesn't pass the Uber COI inspection?",
      answer: "We will provide a detailed report of items that did not meet the requirements. You will need to make the necessary repairs and may be eligible for a re-inspection.",
      delay: "600ms"
    },
    {
      question: "Is the price for Uber COI the same as a standard Roadworthy?",
      answer: "Yes, the fixed price for a comprehensive inspection covering Roadworthy, Uber, and Taxi COI is $65.",
      delay: "800ms"
    }
  ];

  const testimonials = [
    {
      quote: "Got my Uber COI inspection done quickly and professionally. The team was thorough and explained everything clearly.",
      name: "- James W.",
      stars: 5,
      delay: "200ms"
    },
    {
      quote: "Excellent service for my Uber vehicle inspection. Fast turnaround and competitive pricing. Highly recommend!",
      name: "- Lisa M.",
      stars: 5,
      delay: "400ms"
    },
    {
      quote: "Very professional service. They found a minor issue that needed fixing before I could get my Uber COI, but they were honest and helpful throughout.",
      name: "- Robert K.",
      stars: 4.5,
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white text-center fade-up leading-tight drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
            Uber COI Inspection
          </h1>
          <p
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Ensuring your vehicle meets all Uber safety and compliance standards for a Certificate of Inspection.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-black/80 to-darkGray/90">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-xl max-w-2xl mx-auto fade-up  pricing-card pricing-card-interactive">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
              <span className="text-white">Fixed Price: </span>
              <span className="text-neonGreen drop-shadow-glow">$65</span>
            </h2>
            <p className="text-gray-300 text-center mb-8 text-lg">
              Comprehensive inspection for Uber COI compliance
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

      {/* Compliance Checklist Section */}
      <section className="py-16 bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Uber COI Compliance Checklist
          </h2>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Vehicle Condition */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start fade-up" style={{ '--delay': '200ms' }}>
              <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                <i className="fas fa-car text-4xl text-neonGreen mb-4"></i>
                <h3 className="text-xl font-bold text-white tracking-tight">Vehicle Condition</h3>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-3 text-gray-300">
                  {[
                    'Overall vehicle cleanliness and presentation',
                    'No significant dents, rust, or damage to body panels',
                    'All lights (headlights, tail lights, indicators, brake lights) fully functional',
                    'Working horn',
                    'Functional windows and mirrors'
                  ].map(item => (
                    <li key={item} className="flex items-center">
                      <i className="fas fa-check-circle text-neonGreen mr-3 flex-shrink-0"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Safety and Mechanical */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start fade-up" style={{ '--delay': '400ms' }}>
              <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                <i className="fas fa-tools text-4xl text-neonGreen mb-4"></i>
                <h3 className="text-xl font-bold text-white">Safety and Mechanical</h3>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-3 text-gray-300">
                  {[
                    'Braking system in excellent working order',
                    'Tires have sufficient tread depth and no damage',
                    'Seatbelts for all passengers in good condition and working order',
                    'Operational speedometer and odometer',
                    'Functional heating and air conditioning'
                  ].map(item => (
                    <li key={item} className="flex items-center">
                      <i className="fas fa-check-circle text-neonGreen mr-3 flex-shrink-0"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Documentation and Interior */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start fade-up" style={{ '--delay': '600ms' }}>
              <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                <i className="fas fa-file-alt text-4xl text-neonGreen mb-4"></i>
                <h3 className="text-xl font-bold text-white">Documentation and Interior</h3>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-3 text-gray-300">
                  {[
                    'Valid vehicle registration',
                    'Proof of vehicle insurance',
                    'Interior free from significant wear and tear',
                    'Adequate passenger space as per Uber requirements'
                  ].map(item => (
                    <li key={item} className="flex items-center">
                      <i className="fas fa-check-circle text-neonGreen mr-3 flex-shrink-0"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-300 text-sm mt-4">
                  *Note: A document upload interface will be available during the booking process.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Process Section */}
      <section className="py-16 bg-gradient-to-b from-black/80 to-darkGray/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Our Inspection Process
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative inspection-process-container">


              <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center relative z-10 mb-12 md:mb-0 fade-up process-step" style={{ '--delay': '200ms' }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-neonGreen rounded-full shadow-glow flex items-center justify-center text-black font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-neonGreen mb-3 drop-shadow-neon">Booking & Document Check</h3>
                  <p className="text-gray-300 text-base max-w-xs leading-relaxed">
                    Schedule your inspection and ensure all required documents are ready.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center relative z-10 mb-12 md:mb-0 fade-up process-step" style={{ '--delay': '400ms' }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-neonGreen rounded-full shadow-glow flex items-center justify-center text-black font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-neonGreen mb-3 drop-shadow-neon">Comprehensive Vehicle Inspection</h3>
                  <p className="text-gray-300 text-base max-w-xs leading-relaxed">
                    Detailed check of all Uber-required safety and mechanical components.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center relative z-10 fade-up process-step" style={{ '--delay': '600ms' }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-neonGreen rounded-full shadow-glow flex items-center justify-center text-black font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-neonGreen mb-3 drop-shadow-neon">Report and Certificate</h3>
                  <p className="text-gray-300 text-base max-w-xs leading-relaxed">
                    Receive a detailed report and your Uber COI if all requirements are met.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-t from-black-900 via-zinc-900 to-black-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up drop-shadow-neon">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-darkGray/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 card-glow testimonial-card"
                style={{ '--delay': testimonial.delay }}
              >
                <div className="flex items-center mb-4">
                  <i className="fas fa-quote-left text-neonGreen text-2xl mr-3"></i>
                  <div className="text-neonGreen text-xl">
                    {[...Array(Math.floor(testimonial.stars))].map((_, i) => <i key={`star-${i}`} className="fas fa-star"></i>)}
                    {testimonial.stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-white text-right">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-darkGray/90 to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up drop-shadow-neon">
            Frequently Asked Questions - Uber COI
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
          <h2 className="text-4xl font-bold mb-8 text-neonGreen fade-up drop-shadow-neon">Ready for Your Uber COI Inspection?</h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Book your Uber Certificate of Inspection today to get on the road.
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

export default UberCOI;
