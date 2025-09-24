import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does Oculis provide?",
      answer: "We specialize in developing cutting-edge software solutions, including web applications, mobile platforms, and custom enterprise tools. Our focus is on intuitive design and robust functionality to meet your unique needs."
    },
    {
      question: "How can I request a project quote?",
      answer: "You can request a quote by filling out the contact form on our contact page. Please provide as many details as possible about your project, and a member of our team will get in touch with you within 24-48 hours."
    },
    {
      question: "Is your company committed to sustainability?",
      answer: "Yes, sustainability is one of our core values. We strive to implement eco-friendly practices in our development process and a portion of our profits are dedicated to environmental initiatives."
    },
    {
      question: "What is your approach to client collaboration?",
      answer: "We believe in a collaborative and transparent process. We work closely with our clients from the initial concept to final delivery, ensuring that our solutions align perfectly with their vision and goals."
    }
  ];

  return (
    <section className="bg-gray-900 text-gray-200 py-20 px-4 md:px-12 lg:px-24 min-h-screen flex flex-col items-center font-inter">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold pb-2 mb-4 relative inline-block">
          <span className="relative z-10 text-emerald-400 drop-shadow-lg text-glow">
            Frequently Asked Questions
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-emerald-500 rounded-full z-0 glowing-underline"></div>
        </h1>
        <p className="text-lg leading-relaxed text-gray-400 mb-12">
          Find answers to the most common questions about our company and services.
        </p>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg shadow-emerald-900/40 border border-gray-700 transition-all duration-300 transform hover:scale-[1.01]"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-100 flex-grow pr-4">{item.question}</h3>
                <span className="text-emerald-400">
                  {openIndex === index ? (
                    <ChevronUpIcon className="w-8 h-8 transition-transform duration-300" />
                  ) : (
                    <ChevronDownIcon className="w-8 h-8 transition-transform duration-300" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-300 leading-relaxed animate-fade-in-down">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          
          .font-inter {
            font-family: 'Inter', sans-serif;
          }

          .text-glow {
            text-shadow: 0 0 8px rgba(16, 185, 129, 0.6), 0 0 12px rgba(16, 185, 129, 0.4);
          }
          
          .glowing-underline {
            animation: slide-in-underline 1s ease-out forwards;
            transform-origin: left;
            box-shadow: 0 0 8px rgba(16, 185, 129, 0.6), 0 0 12px rgba(16, 185, 129, 0.4);
          }

          @keyframes slide-in-underline {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
          
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.5s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default FAQ;
