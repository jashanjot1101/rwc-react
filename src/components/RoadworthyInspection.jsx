import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import images - assuming these are in your assets folder
import heroImage from '../assets/images/roadworthy-inspection.jpg'; // Main hero
import inspectionBayImage from '../assets/images/roadworthy-inspection.jpg'; // Re-using, or use a specific 'inspection-bay.jpg'
import diagnosticImage from '../assets/images/advance-diagnose.jpg';
import waitingAreaImage from '../assets/images/waiting-area.jpg';

// Import the CSS file for this page
import './RoadworthyInspection.css';

const RoadworthyInspection = () => {
  useEffect(() => {
    document.title = "Roadworthy Inspection | Roadworthy Clinic";
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
      question: "How long does the inspection take?",
      answer: "A typical roadworthy inspection takes approximately 45-60 minutes to complete.",
      delay: "200ms"
    },
    {
      question: "What documents do I need?",
      answer: "Please bring your vehicle registration papers and valid identification.",
      delay: "400ms"
    },
    {
      question: "What if my vehicle fails the inspection?",
      answer: "We'll provide a detailed report of any issues and give you 14 days to make the necessary repairs before a free re-inspection.",
      delay: "600ms"
    }
  ];

  const testimonials = [
    {
      quote: "Quick, professional service. The inspector was thorough and explained everything clearly. Highly recommend!",
      name: "- Michael R.",
      delay: "200ms"
    },
    {
      quote: "Best inspection service in Brisbane! Fair pricing and excellent customer service. Will definitely use again.",
      name: "- Sarah L.",
      delay: "400ms"
    },
    {
      quote: "Very thorough inspection and great attention to detail. The process was smooth and efficient.",
      name: "- James T.",
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
            Roadworthy Inspection
          </h1>
          <p
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Professional vehicle inspections ensuring your vehicle meets all safety standards and regulations.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-black/80 to-darkGray/90">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-xl max-w-2xl mx-auto fade-up card-glow pricing-card-interactive">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
              <span className="text-white">Fixed Price: </span>
              <span className="text-neonGreen drop-shadow-glow">$65</span>
            </h2>
            <p className="text-gray-300 text-center mb-8 text-lg">
              Comprehensive inspection for Roadworthy, Uber, and Taxi COI
            </p>
            <div className="flex justify-center">
              <Link
                to="/booking"
                className="bg-neonGreen hover:bg-white text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg uppercase book-now-button"
              >
                Book Now <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Checklist */}
      <section className="py-16 bg-darkGray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Inspection Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className=" bg-gradient-to-t from-black/40 to-black/90 p-6 rounded-xl fade-up shadow-lg card-glow border-[#7FFF00] border "
              style={{ '--delay': '200ms' }}
            >
              <h3 className="text-xl font-bold mb-4 text-white tracking-tight">Safety Features</h3>
              <ul className="space-y-3">
                {['Braking system inspection', 'Steering components check', 'Suspension system evaluation', 'Tyre condition assessment'].map(item => (
                  <li key={item} className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-neonGreen mr-3 text-lg"></i>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-gradient-to-t from-black/40 to-black/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 border-[#7FFF00] card-glow"
              style={{ '--delay': '400ms' }}
            >
              <h3 className="text-xl font-bold mb-4 text-white tracking-tight">Vehicle Structure</h3>
              <ul className="space-y-3">
                {['Body structure integrity', 'Chassis inspection', 'Rust and corrosion check', 'Window and windscreen condition'].map(item => (
                  <li key={item} className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-neonGreen mr-3 text-lg"></i>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-darkGray/90 to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up drop-shadow-neon">Our Facility</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: inspectionBayImage, alt: "Modern inspection bay", text: "State-of-the-art inspection bay", delay: "200ms" },
              { src: diagnosticImage, alt: "Diagnostic equipment", text: "Advanced diagnostic equipment", delay: "400ms" },
              { src: waitingAreaImage, alt: "Customer waiting area", text: "Comfortable customer waiting area", delay: "600ms" }
            ].map(item => (
              <div
                key={item.alt}
                className="relative overflow-hidden rounded-lg fade-up card-glow h-64 group gallery-item"
                style={{ '--delay': item.delay }}
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4 text-lg font-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-darkGray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-neonGreen fade-up tracking-tight drop-shadow-neon">
            Inspection Process
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative timeline-container">
              {/* Vertical line is centered on desktop, left-aligned on mobile */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 verticlal-line  md:w-1.5 bg-gradient-to-b from-neonGreen via-neonGreen/70 to-neonGreen/30 transform md:-translate-x-1/3 timeline-line rounded-full "></div>
              <div className="space-y-16 md:space-y-24">
                {[
                  { icon: 'fas fa-clipboard-list', title: 'Initial Assessment', desc: 'Thorough vehicle documentation review and initial visual inspection.', delay: '200ms', align: 'left' },
                  { icon: 'fas fa-search', title: 'Detailed Inspection', desc: 'Comprehensive check of all safety and mechanical components.', delay: '400ms', align: 'right' },
                  { icon: 'fas fa-certificate', title: 'Results & Documentation', desc: 'Detailed report preparation and certificate issuance if passed.', delay: '600ms', align: 'left' }
                ].map((step, index) => (
                  <div key={step.title} className={`relative pl-12 md:pl-0 fade-up timeline-item`} style={{ '--delay': step.delay }}>
                    {/* Dot is positioned relative to the left edge on mobile, centered on desktop */}
                    <div className="absolute left-0 md:left-1/2 top-8 md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-neonGreen rounded-full shadow-glow flex items-center justify-center timeline-dot">
                      <span className="text-black font-bold text-lg md:text-xl">{index + 1}</span>
                    </div>
                    {/* Content wrapper uses half-width and margin/padding for positioning on desktop */}
                    <div className={`timeline-content-wrapper ml-6 md:ml-0 md:w-1/2 ${step.align === 'left' ? 'md:pr-12 md:ml-auto md:translate-x-2' : 'md:pl-12 md:-translate-x-3.5'} `}>
                      <div className="bg-gradient-to-br from-darkGray/90 to-black p-6 md:p-8 rounded-xl shadow-l card-glow timeline-card transition-all duration-300">
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
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-darkGray p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 card-glow faq-item timeline-card"
                style={{ '--delay': faq.delay }}
              >
                <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-darkGray/90 to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neonGreen fade-up drop-shadow-neon">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-darkGray/90 p-6 rounded-xl fade-up shadow-lg border border-neonGreen/10 card-glow testimonial-card"
                style={{ '--delay': testimonial.delay }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-neonGreen text-xl mr-2">
                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-white font-semibold text-right">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-darkGray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-neonGreen fade-up drop-shadow-neon">Ready for Your Inspection?</h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Book your roadworthy inspection today and ensure your vehicle meets all safety standards.
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

export default RoadworthyInspection;
