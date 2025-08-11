import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ReturnsRefundPolicy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#1a5f57' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 leading-tight">Returns & Refund Policy</h1>
            <p className="font-inter text-xl md:text-2xl mb-8 opacity-90">Your satisfaction and trust are our priority</p>
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
                  We value your trust and aim to provide a seamless experience.
                </p>
              </div>

              {/* For Workshops & Consultations */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">For Workshops & Consultations</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="font-inter text-gray-700 mb-4">
                      Once a booking is confirmed and payment is made, fees are generally non-refundable.
                    </p>
                    <p className="font-inter text-gray-700 mb-4">
                      If you cannot attend a live workshop, we may offer:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                        <p className="font-inter text-gray-700">Access to a session recording (if available), or</p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                        <p className="font-inter text-gray-700">A one-time reschedule to another batch/session (subject to availability).</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Refunds */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">Refunds</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                        <p className="font-inter text-gray-700">Full refunds will be issued only if Path'o'Life cancels a session or cannot deliver the service.</p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                        <p className="font-inter text-gray-700">For digital downloads, resources, or toolkits, no refunds will be given once delivered.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Refund Request Process */}
              <div className="mb-12">
                <h2 className="font-playfair text-3xl font-bold text-[#1a5f57] mb-6">Refund Request Process</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                        <p className="font-inter text-gray-700">Email <span className="font-semibold">drpravina.patholife@gmail.com</span> with your payment details and reason within 3 working days of purchase.</p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1a5f57] rounded-full mt-3 flex-shrink-0"></div>
                        <p className="font-inter text-gray-700">Approved refunds will be processed within 7–10 business days to your original payment method.</p>
                      </li>
                    </ul>
                  </div>
                </div>
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

export default ReturnsRefundPolicy;
