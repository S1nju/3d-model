import React, { useState } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useGSAP(() => {
    // Header animation
    gsap.fromTo('.contact-header', 
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact-section',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Contact cards animation
    gsap.fromTo('.contact-card', 
      {
        opacity: 0,
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.contact-cards',
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Form animation
    gsap.fromTo('.contact-form', 
      {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.contact-form',
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Form fields stagger animation
    gsap.fromTo('.form-field', 
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.contact-form',
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating animation for background elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.5
    });

  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
setIsSubmitting(true);
        try {
            
      const response = await fetch('https://script.google.com/macros/s/AKfycbwYyKHVikYjKQ9JTrrZCYOzHTf7wahlPYzPdUSqqw0OpPa8vxkYcJmu5IlVaTo2m03A/exec', {
           redirect: "follow",
        method: 'POST',
        headers: {
           "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });
      console.log('Form submitted successfully:', formData);

      const data = await response.json(); // Assuming your Apps Script returns JSON
      console.log('Submission successful:', data);
          
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitStatus('success');
      setIsSubmitting(false);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('')
      setIsSubmitting(false);
    }
    // Simulate form submission
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);

  };

  return (
    <section className="contact-section min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-1/2 left-1/2 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-16">
        {/* Header */}
        <div className="contact-header text-center mb-16">
          <h1 style={{fontFamily:'general'}} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let's Connect
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{fontFamily:'robert-regular'}}>
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="contact-cards space-y-6">
              {/* Email Card */}
              <div className="contact-card bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1" style={{fontFamily:'robert-medium'}}>
                      Email
                    </h3>
                    <a href="mailto:aminebouhaik527@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300" style={{fontFamily:'robert-regular'}}>
                      aminebouhaik527@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="contact-card bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1" style={{fontFamily:'robert-medium'}}>
                      Phone
                    </h3>
                    <a href="tel:+213553916320" className="text-gray-300 hover:text-green-400 transition-colors duration-300" style={{fontFamily:'robert-regular'}}>
                      +213 5539 16320
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-card bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1" style={{fontFamily:'robert-medium'}}>
                      Location
                    </h3>
                    <p className="text-gray-300" style={{fontFamily:'robert-regular'}}>
                      Algeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="contact-card bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4" style={{fontFamily:'robert-medium'}}>
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {/* GitHub */}
                <a href="https://github.com/S1nju/" className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/anes-bouhaik-1a8956272/" className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
      
             
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6" style={{fontFamily:'general'}}>
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-field">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2" style={{fontFamily:'robert-medium'}}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                    style={{fontFamily:'robert-regular'}}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" style={{fontFamily:'robert-medium'}}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                    style={{fontFamily:'robert-regular'}}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2" style={{fontFamily:'robert-medium'}}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project discussion"
                    style={{fontFamily:'robert-regular'}}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2" style={{fontFamily:'robert-medium'}}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    style={{fontFamily:'robert-regular'}}
                  />
                </div>

                <div className="form-field">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{fontFamily:'robert-medium'}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="text-green-400 text-center font-medium" style={{fontFamily:'robert-medium'}}>
                    ✨ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400" style={{fontFamily:'robert-regular'}}>
            © 2025 S1nju. Built with React & GSAP.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact