import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, User, Calendar, MapPin, Mail, Phone, CheckCircle, Clock, Users } from 'lucide-react';
import { submitPaymentForm, completePaymentForm, PaymentFormData } from '@/services/payment-api';

interface WorkshopFeature {
  text: string;
}

interface WorkshopPaymentFormProps {
  isOpen: boolean;
  onClose: () => void;
  workshopDetails: {
    name: string;
    amount: number;
    paymentButtonId: string;
    date: string;
    time: string;
    features: WorkshopFeature[];
    description?: string;
  };
}

const WorkshopPaymentForm: React.FC<WorkshopPaymentFormProps> = ({ isOpen, onClose, workshopDetails }) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    fullName: '',
    age: '',
    cityState: '',
    email: '',
    phoneNumber: '',
    heardFrom: '',
    registeredFor: workshopDetails.name,
    amount: workshopDetails.amount
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const paymentFormRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: keyof PaymentFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit form data
      await submitPaymentForm(formData);
      
      // Show thank you message
      setShowThankYou(true);
      
      // After 3 seconds, show payment
      setTimeout(() => {
        setShowThankYou(false);
        setShowPayment(true);
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      // Continue with payment flow even if backend is not available
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setShowPayment(true);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Load Razorpay script when payment modal opens
  useEffect(() => {
    if (showPayment && paymentFormRef.current) {
      // Clear previous content
      paymentFormRef.current.innerHTML = '';
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (paymentFormRef.current) {
          // Create form element
          const form = document.createElement('form');
          
          // Create script element
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
          script.setAttribute('data-payment_button_id', workshopDetails.paymentButtonId);
          script.async = true;
          
          // Listen for payment success
          window.addEventListener('message', handlePaymentSuccess);
          
          // Append script to form
          form.appendChild(script);
          
          // Append form to container
          paymentFormRef.current.appendChild(form);
        }
      }, 100);
    }

    return () => {
      window.removeEventListener('message', handlePaymentSuccess);
    };
  }, [showPayment, workshopDetails.paymentButtonId]);

  const handlePaymentSuccess = async (event: MessageEvent) => {
    if (event.data && event.data.type === 'razorpay_payment_success') {
      try {
        // Complete the payment form with payment details
        await completePaymentForm(formData, {
          razorpayOrderId: event.data.orderId,
          razorpayPaymentId: event.data.paymentId,
          razorpaySignature: event.data.signature,
          amount: workshopDetails.amount
        });

        // Show success message
        alert(`Payment successful! Your registration for "${workshopDetails.name}" has been confirmed. We will contact you soon with workshop details.`);
        onClose();
      } catch (error) {
        console.error('Error completing payment:', error);
        alert('Payment successful but there was an error saving your details. Please contact us.');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="bg-primary text-white relative">
          <CardTitle className="text-center text-xl">
            Register for {workshopDetails.name}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="p-6">
          {!showThankYou && !showPayment && (
            <div className="space-y-6">
              {/* Workshop Details Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-lg text-primary mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Workshop Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span><strong>Date:</strong> {workshopDetails.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span><strong>Time:</strong> {workshopDetails.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span><strong>Price:</strong> ₹{workshopDetails.amount}</span>
                  </div>
                </div>
              </div>

              {/* Workshop Features Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-lg text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  What You'll Learn
                </h3>
                <div className="space-y-2">
                  {workshopDetails.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-green-800">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Form */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Registration Form
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className="pl-10"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-sm font-medium">
                        Age *
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="age"
                          type="number"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          className="pl-10"
                          placeholder="Enter your age"
                          min="1"
                          max="120"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cityState" className="text-sm font-medium">
                      City & State *
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="cityState"
                        type="text"
                        value={formData.cityState}
                        onChange={(e) => handleInputChange('cityState', e.target.value)}
                        className="pl-10"
                        placeholder="Enter your city & state"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-10"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber" className="text-sm font-medium">
                        Phone Number (WhatsApp preferred) *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phoneNumber"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                          className="pl-10"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="heardFrom" className="text-sm font-medium">
                      How did you hear about Path'o'Life? *
                    </Label>
                    <Select
                      value={formData.heardFrom}
                      onValueChange={(value) => handleInputChange('heardFrom', value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="doctor-referral">Doctor Referral</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white border-0"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Processing...
                      </div>
                    ) : (
                      `👉 Register for ${workshopDetails.name} - ₹${workshopDetails.amount}`
                    )}
                  </Button>
                </form>
              </div>
            </div>
          )}

          {showThankYou && (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Thank you for your interest in {workshopDetails.name}!
              </h3>
              <p className="text-gray-600 mb-4">
                Your details have been recorded successfully. Please proceed with the payment to confirm your workshop registration.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                Loading payment gateway...
              </div>
            </div>
          )}

          {showPayment && (
            <div className="text-center py-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Complete Your Workshop Registration
              </h3>
              <p className="text-gray-600 mb-6">
                Please complete the payment below to confirm your registration for {workshopDetails.name}.
              </p>
              <div ref={paymentFormRef} className="flex justify-center"></div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkshopPaymentForm;
