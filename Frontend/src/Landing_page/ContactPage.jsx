import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    console.log('Form data submitted:', formData);

    // Simulate an API call
    setTimeout(() => {
      // For demonstration, we'll always show a success message
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000); // Clear message after 5 seconds
    }, 1500);
  };

  return (
    <section className="bg-gray-900 text-gray-200 py-20 px-4 md:px-12 lg:px-24 min-h-screen flex items-center justify-center font-inter">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold pb-2 mb-4 relative inline-block">
          <span className="relative z-10 text-emerald-400 drop-shadow-md">
            {/* Options: "Let's Connect", "Contact Our Team", "Reach Out to Us" */}
            Let's Connect
          </span>
          <div className="absolute -bottom-1 left-0 w-64 h-1.5 bg-emerald-500 rounded-full z-0 glowing-underline"></div>
        </h1>
        <p className="text-lg leading-relaxed text-gray-400 mb-12">
          We'd love to hear from you. Send us a message, and we'll get back to you as soon as possible.
        </p>

        <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl shadow-emerald-900/40 border border-gray-700 glowing-card relative">
          {/* Contact Form Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-emerald-400 mb-6 text-left">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 glowing-button"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {status === 'success' && (
              <p className="mt-4 text-center text-emerald-400">Thank you for your message! We will be in touch soon.</p>
            )}
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-3xl font-semibold text-emerald-400 mb-6 text-left">Our Contact Details</h2>
            <p className="text-gray-300 mb-6 text-left">
              Prefer to reach out directly? Here’s how you can find us.
            </p>
            <div className="space-y-6 text-gray-400 text-left">
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 glowing-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
                <span>info@oculis.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 glowing-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.82 3.82 5.2 6.64 6.62l2.3-2.3c.27-.27.67-.36.96-.25a11.1 11.1 0 0 1 5.43 1.25c.29.08.4.4.24.69l-1.1 2.01c-.13.24-.4.36-.67.36-2.91 0-5.71-1.18-7.85-3.32C6.18 12.71 5 9.91 5 7.02c0-.27.12-.54.36-.67l2.01-1.1c.28-.16.6-.05.69.24a11.1 11.1 0 0 1 1.25 5.43c.11.29.02.69-.25.96l-2.3 2.3z"></path>
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
          
          .glowing-card {
            position: relative;
            z-index: 10;
          }
          .glowing-button {
            box-shadow: 0 0 15px rgba(52, 211, 153, 0.4);
            transition: all 0.3s ease-in-out;
          }
          .glowing-button:hover {
            box-shadow: 0 0 25px rgba(52, 211, 153, 0.6);
          }
          .glowing-icon {
            filter: drop-shadow(0 0 4px #10b981);
            transition: all 0.3s ease-in-out;
          }
          @keyframes pulse-glow {
            0% {
              box-shadow: 0 0 10px rgba(52, 211, 153, 0.2);
            }
            50% {
              box-shadow: 0 0 20px rgba(52, 211, 153, 0.4);
            }
            100% {
              box-shadow: 0 0 10px rgba(52, 211, 153, 0.2);
            }
          }
          .glowing-card::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            background: rgba(52, 211, 153, 0.2);
            border-radius: 20px;
            filter: blur(20px);
            z-index: -1;
            opacity: 0.5;
            animation: pulse-glow 3s infinite alternate;
          }
          @keyframes slide-in-underline {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          .glowing-underline {
            animation: slide-in-underline 1s ease-out forwards;
            transform-origin: left;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
