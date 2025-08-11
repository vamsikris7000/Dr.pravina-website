import React from 'react';
import { Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#1a5f57' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 leading-tight">Privacy Policy</h1>
            <p className="font-inter text-xl md:text-2xl mb-8 opacity-90">Your privacy and trust are important to us</p>
            <p className="font-inter text-lg opacity-80">Last Updated: 9 August 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  At Path'o'Life, we respect your privacy and are committed to protecting the personal information you share with us.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">Information We Collect</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-inter font-semibold text-lg text-[#1a5f57] mb-3">Personal details</h3>
                    <p className="font-inter text-gray-700">Name, email address, phone number (for bookings, communication, and follow-ups).</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-inter font-semibold text-lg text-[#1a5f57] mb-3">Health information</h3>
                    <p className="font-inter text-gray-700">Details you voluntarily share during consultations or workshop registrations.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-inter font-semibold text-lg text-[#1a5f57] mb-3">Payment information</h3>
                    <p className="font-inter text-gray-700">Processed securely via third-party providers like Razorpay — we do not store your card or bank details.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-inter font-semibold text-lg text-[#1a5f57] mb-3">Website usage data</h3>
                    <p className="font-inter text-gray-700">Cookies and analytics to improve user experience.</p>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">How We Use Your Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-gray-700">To confirm bookings, send reminders, and deliver the services you request.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-gray-700">To send educational resources, newsletters, and promotional updates (only with your consent).</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-gray-700">To enhance our offerings, service quality, and user experience.</p>
                  </li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">Data Protection</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-gray-700">We use SSL encryption and secure servers to safeguard your information.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-gray-700">Access to your personal data is restricted to authorized personnel.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-gray-700">We do not sell, rent, or trade your personal information to third parties.</p>
                  </li>
                </ul>
              </div>

              {/* Third-Party Services */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">Third-Party Services</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-gray-700">Payments are processed by Razorpay, which follows its own privacy policy.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-gray-700">We may share limited data with trusted vendors for email/SMS communication.</p>
                  </li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">Your Rights</h2>
                <p className="font-inter text-gray-700 mb-6">
                  You may request access, correction, or deletion of your personal data at any time by contacting us.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-[#1a5f57] rounded-xl p-8 text-white">
                <h2 className="font-playfair text-2xl font-bold mb-6">Contact Us</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span className="font-inter">drpravina.patholife@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span className="font-inter">9420920742</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
