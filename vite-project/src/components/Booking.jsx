import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import images
import bookingHeroImage from '../assets/images/booking-hero.jpg';

// Import the CSS file for the Booking page (will be simplified)
import './Booking.css';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1-indexed steps
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    vehicle: '',
  });

  const serviceOptions = [
    { id: 'roadworthy', name: 'Roadworthy Inspection', icon: 'fas fa-car-crash', desc: 'Certified safety inspection.' },
    { id: 'uber-coi', name: 'Uber COI', icon: 'fas fa-taxi', desc: 'Uber Certificate of Inspection.' },
    { id: 'rotors-machining', name: 'Rotors Machining', icon: 'fas fa-cogs', desc: 'Brake rotor resurfacing.' },
    { id: 'battery-service', name: 'Battery Service', icon: 'fas fa-battery-full', desc: 'Supply and fitting.' },
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
  ];

  // Scroll animations
  useEffect(() => {
    document.title = "Book an Appointment | Roadworthy Clinic";
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

    const elementsToAnimate = document.querySelectorAll('.fade-up');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => elementsToAnimate.forEach((el) => observer.unobserve(el));
  }, []);


  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const validateStep1 = () => {
    if (!selectedService) {
      alert('Please select a service.');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.date || !formData.time || !formData.name.trim() || !formData.phone.trim() || !formData.vehicle.trim()) {
      alert('Please fill in all details.');
      return false;
    }
    if (!/^\d{8,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
        alert('Please enter a valid phone number.');
        return false;
    }
    return true;
  };

  const nextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    console.log('Booking Data:', { service: selectedService, ...formData });
    alert('Booking Confirmed! (This is a demo). Check the console for booking data.');
  };

  const getStepIndicatorClass = (stepNum) => {
    if (stepNum < currentStep) return 'bg-neonGreen text-black';
    if (stepNum === currentStep) return 'bg-neonGreen text-black';
    return 'bg-gray-600 text-white';
  };

   const getStepTextClass = (stepNum) => {
    if (stepNum <= currentStep) return 'text-neonGreen';
    return 'text-gray-400';
  };

  const today = new Date().toISOString().split('T')[0];

  const inputClasses = "shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-black border-neonGreen/30 focus:border-neonGreen text-white placeholder-gray-500";
  const primaryButtonClasses = "bg-neonGreen text-black px-8 py-3 rounded-full font-bold hover:bg-white transition duration-300 uppercase";
  const secondaryButtonClasses = "border-2 border-gray-600 text-gray-400 px-8 py-3 rounded-full font-bold hover:border-white hover:text-white transition duration-300 uppercase";


  return (
    <>
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${bookingHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-darkGray/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white text-center fade-up leading-tight drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
            Book Your Service
          </h1>
          <p
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Schedule your appointment quickly and easily online.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-darkGray/90 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-black-800 via-zinc-900 to-black p-6 sm:p-8 rounded-xl shadow-xl border border-neonGreen/20 fade-up">
            <h2 className="text-3xl font-bold mb-8 text-center text-neonGreen tracking-tight">
              Schedule Your Appointment
            </h2>

            <div className="flex justify-between items-start mb-10">
              {[1, 2, 3].map(stepNum => (
                <div key={stepNum} className="flex-1 text-center">
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${getStepIndicatorClass(stepNum)}`}>
                    {stepNum}
                  </div>
                  <p className={`text-sm mt-2 transition-colors duration-300 ${getStepTextClass(stepNum)}`}>
                    {stepNum === 1 ? 'Service' : stepNum === 2 ? 'Details' : 'Confirm'}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleConfirmBooking}>
              {currentStep === 1 && (
                <div className="form-step ">
                  <h3 className="text-2xl font-bold mb-6 text-white">Select Your Service</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {serviceOptions.map(service => (
                      <div
                        key={service.id}
                        className={`  p-6 rounded-lg  cursor-pointer service-select-card ${selectedService === service.id ? 'selected' : ''}`}
                        onClick={() => handleServiceSelect(service.id)}
                      >
                        <i className={`${service.icon} text-neonGreen text-3xl mb-3`}></i>
                        <h4 className="text-xl font-bold mb-2 text-white">{service.name}</h4>
                        <p className="text-gray-400 text-sm">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-8">
                    <button
                      type="button"
                      onClick={nextStep}
                      className={`${primaryButtonClasses} ${!selectedService ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={!selectedService}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="form-step">
                  <h3 className="text-2xl font-bold mb-6 text-white">Your Details & Availability</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="date" className="block text-gray-300 text-sm font-bold mb-2">Select Date</label>
                      <input
                        className={inputClasses}
                        id="date"
                        type="date"
                        min={today}
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-gray-300 text-sm font-bold mb-2">Select Time Slot</label>
                      <select
                        className={inputClasses}
                        id="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">-- Select a time --</option>
                        {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Your Name</label>
                      <input
                        className={inputClasses}
                        id="name"
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 text-sm font-bold mb-2">Phone Number</label>
                      <input
                        className={inputClasses}
                        id="phone"
                        type="tel"
                        placeholder="e.g. 0412345678"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicle" className="block text-gray-300 text-sm font-bold mb-2">Vehicle Make and Model</label>
                      <input
                        className={inputClasses}
                        id="vehicle"
                        type="text"
                        placeholder="e.g., Toyota Camry 2018"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <button type="button" onClick={prevStep} className={secondaryButtonClasses}>Previous</button>
                    <button type="button" onClick={nextStep} className={primaryButtonClasses}>Next</button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="form-step">
                  <h3 className="text-2xl font-bold mb-6 text-white">Confirm Your Booking</h3>
                  <div className="bg-black p-6 rounded-lg border border-neonGreen/20 mb-6 space-y-2">
                    <h4 className="text-xl font-bold mb-3 text-white">Booking Summary</h4>
                    <p className="text-gray-300"><span className="font-bold text-neonGreen">Service:</span> {serviceOptions.find(s => s.id === selectedService)?.name}</p>
                    <p className="text-gray-300"><span className="font-bold text-neonGreen">Date:</span> {formData.date}</p>
                    <p className="text-gray-300"><span className="font-bold text-neonGreen">Time:</span> {formData.time}</p>
                    <p className="text-gray-300"><span className="font-bold text-neonGreen">Name:</span> {formData.name}</p>
                    <p className="text-gray-300"><span className="font-bold text-neonGreen">Phone:</span> {formData.phone}</p>
                    <p className="text-gray-300"><span className="font-bold text-neonGreen">Vehicle:</span> {formData.vehicle}</p>
                  </div>
                  <div className="flex justify-between mt-8">
                    <button type="button" onClick={prevStep} className={secondaryButtonClasses}>Previous</button>
                    <button type="submit" className={primaryButtonClasses}>Confirm Booking</button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-darkGray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-neonGreen fade-up ">Questions About Booking?</h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto fade-up leading-relaxed"
            style={{ '--delay': '200ms' }}
          >
            Contact us directly if you need assistance or have special requests.
          </p>
          <div className="flex justify-center gap-4 fade-up" style={{ '--delay': '400ms' }}>
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

export default Booking;
