import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 text-gray-200 py-20 px-4 md:px-12 lg:px-24 min-h-screen flex items-center justify-center font-inter">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold pb-2 mb-4 relative inline-block">
              <span className="relative z-10 text-emerald-400 drop-shadow-lg text-glow">About Us</span>
              <div className="absolute -bottom-1 left-0 w-24 h-1.5 bg-emerald-500 rounded-full z-0 glowing-underline"></div>
            </h1>

            <p className="text-lg leading-relaxed text-gray-400 mb-6 mt-8">
              Welcome to <strong className="font-semibold text-emerald-300">Oculis</strong>, where we believe in the power of clarity and innovation. We are a team of dedicated professionals committed to building solutions that are not just cutting-edge, but also intuitive and genuinely transformative.
            </p>
            <p className="text-lg leading-relaxed text-gray-400 mb-12">
              Our work is driven by a passion for excellence and a deep-seated respect for our users. We strive to create platforms that simplify complexity and empower every individual and organization to achieve their goals with confidence.
            </p>
          </div>

          {/* Right Column: Cards */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Vision Card */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-emerald-900/40 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-3">Our Vision</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  To be a global leader in digital innovation, recognized for our commitment to quality, integrity, and solutions that make a lasting positive impact on the world.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-emerald-900/40 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-3">Our Mission</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  To empower individuals and businesses by providing them with the tools and insights needed to navigate the digital landscape with ease and efficiency.
                </p>
              </div>

              {/* Values Card */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-emerald-900/40 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-3">Our Values</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Integrity, innovation, and a collaborative spirit are at the core of our culture. We believe in transparent communication and building strong partnerships with our clients.
                </p>
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
        `}
      </style>
    </section>
  );
};

export default About;



