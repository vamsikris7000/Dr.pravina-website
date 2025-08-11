import React from 'react';
import { Mail, Phone } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#1a5f57' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 leading-tight">Terms & Conditions</h1>
            <p className="font-inter text-xl md:text-2xl mb-8 opacity-90">Please read these terms carefully</p>
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
                  Welcome to Path'o'Life. By using our website, booking our services, or purchasing our resources, you agree to these terms.
                </p>
              </div>

              {/* Services */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">1. Services</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-inter text-gray-700">
                    Path'o'Life offers lifestyle medicine consultations, workshops, educational programs, and downloadable resources.
                  </p>
                </div>
              </div>

              {/* Eligibility */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">2. Eligibility</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-inter text-gray-700">
                    You must be 18 years or older, or have parental consent, to use our services.
                  </p>
                </div>
              </div>

              {/* Health Disclaimer */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">3. Health Disclaimer</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-inter text-gray-700">
                    Our services are for educational and lifestyle guidance purposes only. They are not a substitute for medical diagnosis or emergency treatment. Always consult your physician for any medical concerns.
                  </p>
                </div>
              </div>

              {/* Payment */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">4. Payment</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-inter text-gray-700">
                    All bookings must be fully paid at the time of confirmation through approved methods such as Razorpay.
                  </p>
                </div>
              </div>

              {/* Cancellation & Refund */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">5. Cancellation & Refund</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-inter text-gray-700">
                    Refer to our Returns & Refund Policy for full details.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">6. Intellectual Property</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-inter text-gray-700">
                    All workshop content, recordings, and downloadable resources are the intellectual property of Path'o'Life. Reproduction, sharing, or resale without written permission is prohibited.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">7. Limitation of Liability</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-inter text-gray-700">
                    Path'o'Life is not liable for any direct or indirect damages resulting from the use or inability to use our services.
                  </p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">8. Changes to Terms</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-inter text-gray-700">
                    We may update these terms at any time. Continued use of our services means you accept the updated terms.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-[#1a5f57] rounded-xl p-8 text-white">
                <h2 className="font-playfair text-2xl font-bold mb-6">Contact</h2>
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

export default TermsConditions;
