import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import images
import contactHeroImage from '../assets/images/contact-hero.jpg';

// Import the CSS file for the Contact page
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Scroll animations
  useEffect(() => {
    document.title = "Contact Us | Roadworthy Clinic";
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
          // observer.unobserve(entry.target); // Optional: unobserve after first animation
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-up, .scale-in');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate.forEach((el) => {
        if (el && observer) { // Check if el and observer exist
            observer.unobserve(el);
        }
      });
    };
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    // Email validation (simple regex)
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    // In a real application, you would send this data to a backend
    console.log('Form Data Submitted:', formData);
    alert('Message Sent! (This is a demo). Check the console for form data.');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  // Common Tailwind classes for form inputs for consistency
  const formInputBaseClasses = "shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline text-white placeholder-gray-500";
  const formInputBgBorderClasses = "bg-black border-gray-600"; // As per template

  return (
    <>
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-darkGray/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white text-center fade-up leading-tight drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
            Get in Touch
          </h1>
          <p
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            We'd love to hear from you. Contact us for inquiries or to schedule a service.
          </p>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
            {/* Contact Details & Hours */}
            <div className="fade-up" style={{ '--delay': '0ms' }}>
              <h2 className="text-3xl font-bold mb-8 text-neonGreen tracking-tight">Contact Details</h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p><i className="fas fa-map-marker-alt text-neonGreen mr-3"></i> 123 Auto Lane, Mechanicville, QLD 4000</p>
                <p><i className="fas fa-phone-alt text-neonGreen mr-3"></i> <a href="tel:+61712345678" className="hover:text-neonGreen">(07) 1234 5678</a></p>
                <p><i className="fas fa-envelope text-neonGreen mr-3"></i> <a href="mailto:info@roadworthyclinic.com" className="hover:text-neonGreen">info@roadworthyclinic.com</a></p>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-6 text-neonGreen tracking-tight">Business Hours</h3>
              <div className="bg-gradient-to-br from-black-800 via-zinc-900 to-black p-6 rounded-lg border border-neonGreen/40 inline-block led-display text-neonGreen text-xl">
                <p>Mon - Fri: 08:00 - 17:00</p>
                <p>Saturday: 09:00 - 14:00</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-up" style={{ '--delay': '200ms' }}>
              <div className="bg-gradient-to-br from-black-800 via-zinc-900 to-black backdrop-blur-sm p-8 rounded-xl shadow-xl h-full glass-effect-primary"> {/* Applied glass-effect-primary */}
                <h2 className="text-3xl font-bold mb-8 text-center text-neonGreen tracking-tight">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                      className={`${formInputBaseClasses} ${formInputBgBorderClasses} glowing-input`}
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                      className={`${formInputBaseClasses} ${formInputBgBorderClasses} glowing-input`}
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
                    <input
                      className={`${formInputBaseClasses} ${formInputBgBorderClasses} glowing-input`}
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">Message</label>
                    <textarea
                      className={`${formInputBaseClasses} ${formInputBgBorderClasses} glowing-input h-32 resize-none`}
                      id="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-neonGreen hover:bg-white text-black px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg uppercase"
                    >
                      Send Message <i className="fas fa-paper-plane ml-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden border-2 border-neonGreen/40 shadow-xl fade-up" style={{ '--delay': '400ms' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.890123456789!2d153.0246846150569!3d-27.47224098289075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a045cf98169%3A0x502a359541041e0!2sBrisbane%20City%2C%20QLD!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau&cookiepolicy=none"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Roadworthy Clinic Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-neonGreen fade-up drop-shadow-neon">Need Immediate Assistance?</h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Call us directly during business hours for the fastest service.
          </p>
          <div className="flex justify-center gap-4 fade-up" style={{ '--delay': '400ms' }}>
            <a
              href="tel:+61712345678" // Update with actual phone number
              className="bg-neonGreen text-black px-8 py-3 rounded-full font-bold hover:bg-white transition duration-300 uppercase"
            >
              <i className="fas fa-phone-alt mr-2"></i> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
