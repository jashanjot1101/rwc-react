import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Import images
import heroImage1 from '../assets/images/IMG-20241117-WA0014.jpg';
import heroImage2 from '../assets/images/IMG-20241117-WA0012.jpg';
import heroImage3 from '../assets/images/IMG-20241117-WA0011.jpg';
import ctaImage from '../assets/images/cta-img.jpg';
// import aboutSectionImage from '../assets/images/rwc.png'; // Assuming rwc.png is for about, or use a generic one

import './Home.css'; // Will be updated with styles from home.html

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayIntervalRef = useRef(null);
  const heroSectionRef = useRef(null);

  const heroSlides = [
    {
      img: heroImage1,
      alt: "Auto Service 1",
      title: "Your Vehicle's Health Is Our Priority",
      text: "Professional auto services with state-of-the-art diagnostics and expert mechanics.",
      cta1_text: "Book Now",
      cta1_link: "/booking",
      cta2_text: "Get Quote",
      cta2_link: "mailto:info@roadworthyclinic.com.au?subject=Enquiry%20About%20the%20Service",
      cta2_isExternal: true,
    },
    {
      img: heroImage2,
      alt: "Auto Service 2",
      title: "Expert Mechanical Services",
      text: "Comprehensive diagnostics and repairs by certified professionals.",
      cta1_text: "Our Services",
      cta1_link: "/services",
      cta2_text: "Contact Us",
      cta2_link: "/contact",
    },
    {
      img: heroImage3,
      alt: "Auto Service 3",
      title: "Quality Service Guaranteed",
      text: "Experience excellence with our 12-month service warranty.",
      cta1_text: "Learn More",
      cta1_link: "/about",
      cta2_text: "Schedule Now",
      cta2_link: "/booking",
    }
  ];

  const totalSlides = heroSlides.length;

  const showSlide = (index) => {
    setCurrentSlide(index % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const startAutoPlay = () => {
    if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
    autoPlayIntervalRef.current = setInterval(nextSlide, 6000);
  };

  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    const heroElement = heroSectionRef.current;

    // Mouse enter/leave listeners removed to keep hero carousel playing on hover

    return () => {
      stopAutoPlay();
      // Mouse enter/leave listeners removed to keep hero carousel playing on hover
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount


  useEffect(() => {
    document.title = "Roadworthy Clinic | Brisbane Vehicle Inspections & Safety Certificates";
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.style.getPropertyValue('--delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('bounce-in')) {
              // The bounce-in animation should start via CSS when 'visible' is added if 'animation-play-state: running;' is part of 'visible' or 'bounce-in.visible'
            }
          }, delay);
           // observer.unobserve(entry.target); // Uncomment if you want the animation only once
        } else {
          // Optional: remove 'visible' class when element is out of view if animations should reset
          // entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-up:not(.testimonial-carousel-container), .scale-in, .slide-left, .slide-right, .bounce-in, .about-image');
    elementsToAnimate.forEach(el => observer.observe(el));

    const testimonialContainer = document.querySelector('.testimonial-carousel-container.fade-up');
    if (testimonialContainer) {
      observer.observe(testimonialContainer);
    }

    return () => {
      elementsToAnimate.forEach(el => {
        if (el && observer) { // Check if el and observer exist before unobserving
            observer.unobserve(el);
        }
      });
      if (testimonialContainer && observer) {
        observer.unobserve(testimonialContainer);
      }
    };
  }, []); // Empty dependency array to run once on mount and clean up on unmount

  const servicesData = [
    { icon: "fas fa-car", title: "Car Servicing", description: "Comprehensive service packages to keep your vehicle running smoothly", delay: "0ms" },
    { icon: "fas fa-wrench", title: "Mechanical Repairs", description: "Expert diagnosis and repair for all mechanical issues", delay: "100ms" },
    { icon: "fas fa-certificate", title: "Safety Certificates", description: "Professional vehicle inspections and certification", delay: "200ms" },
    { icon: "fas fa-battery-full", title: "New Battery Supply & Fitting", description: "Quality batteries professionally installed for optimal performance", delay: "300ms" },
    { icon: "fas fa-cogs", title: "Rotors Machining", description: "Precision rotor machining for smooth braking performance", delay: "400ms" },
    { icon: "fas fa-taxi", title: "Uber Coi", description: "Specialized inspections and certifications for Uber vehicles", delay: "500ms" },
    { icon: "fas fa-search", title: "Pre-Buy Inspections", description: "Thorough vehicle inspections before purchase decisions", delay: "600ms" },
    { icon: "fas fa-car-crash", title: "Roadworthy Inspections", description: "Certified inspections to ensure your vehicle meets safety standards", delay: "700ms" }
  ];

  const testimonialsData = [
    { quote: "Excellent service! The team was professional and got my car running perfectly. Highly recommended!", name: "- John Smith", stars: 5 },
    { quote: "Fast, reliable, and honest service. They explained everything clearly and fixed the issues promptly.", name: "- Sarah Johnson", stars: 5 },
    { quote: "Highly professional and friendly staff. They made the process easy and stress-free.", name: "- David Lee", stars: 5 },
    { quote: "Great service overall, very knowledgeable mechanics. Minor delay in service but understandable.", name: "- Emily R.", stars: 4.5 },
    { quote: "Roadworthy Clinic is my go-to for all my car needs. Always reliable and transparent pricing.", name: "- Michael B.", stars: 5 }
  ];
  // Duplicate testimonials for seamless loop (original 5 + 5 + 5 = 15 total)
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];


  return (
    <>
      <section className="relative h-screen overflow-hidden" ref={heroSectionRef}>
        <div className="absolute inset-0" id="carousel">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 carousel-slide transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              data-slide-index={index}
            >
              <img src={slide.img} className="w-full h-full object-cover" alt={slide.alt} />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10 opacity-70"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`max-w-3xl hero-content absolute transition-all duration-700 ease-out ${index === currentSlide ? 'active opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
              data-content-index={index}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-neonGreen drop-shadow-neon">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">{slide.text}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={slide.cta1_link}
                  className="bg-neonGreen text-black px-8 py-3 rounded-full font-bold hover:bg-white transition duration-300 animate-pulse-custom uppercase"
                >
                  {slide.cta1_text}
                </Link>
                {slide.cta2_isExternal ? (
                     <a href={slide.cta2_link} className="border-2 border-neonGreen text-neonGreen px-8 py-3 rounded-full font-bold hover:bg-neonGreen hover:text-black transition duration-300 uppercase">
                        {slide.cta2_text}
                     </a>
                ) : (
                    <Link
                        to={slide.cta2_link}
                        className="border-2 border-neonGreen text-neonGreen px-8 py-3 rounded-full font-bold hover:bg-neonGreen hover:text-black transition duration-300 uppercase"
                    >
                        {slide.cta2_text}
                    </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full bg-white/50 carousel-dot transition-all duration-300 ${index === currentSlide ? 'active' : ''}`}
              data-slide={index}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => {
                showSlide(index);
                startAutoPlay(); // Restart autoplay on manual dot click
              }}
            ></button>
          ))}
        </div>
      </section>

      <section className="py-20 bg-darkGray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-neonGreen fade-up drop-shadow-neon">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg glass-effect fade-up service-card text-center" // Added text-center for icon
                style={{ '--delay': service.delay }}
              >
                <i className={`${service.icon} text-neonGreen text-3xl mb-4`}></i>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-neonGreen fade-up drop-shadow-neon">What Our Clients Say</h2>
          <div className="testimonial-carousel-container">
            <div className="testimonial-carousel-track">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card bg-gradient-to-br from-darkGray/95 to-black/95 p-6 rounded-xl shadow-lg border border-neonGreen/10"
                >
                  <div className="flex items-center mb-4">
                    <i className="fas fa-quote-left text-neonGreen text-2xl mr-3"></i>
                    <div className="text-neonGreen text-xl">
                      {[...Array(Math.floor(testimonial.stars))].map((_, i) => <i key={`star-${i}`} className="fas fa-star"></i>)}
                      {testimonial.stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold text-white text-right">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 sm:py-24 md:py-32 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-neonGreen scale-in drop-shadow-neon">
            Ready to Get Started?
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 fade-up"
            style={{ '--delay': '200ms' }}
          >
            Book your appointment today and experience our premium auto services.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-neonGreen text-black px-8 py-3 rounded-full font-bold hover:bg-white transition duration-300 bounce-in uppercase"
            style={{ '--delay': '400ms' }} /* Ensure bounce-in has animation-play-state: paused initially */
          >
            Schedule Service
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
