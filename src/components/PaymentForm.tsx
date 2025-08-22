import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, User, Calendar, MapPin, Mail, Phone, Heart, Users, MessageSquare, Search, CheckCircle } from 'lucide-react';
import { submitPaymentForm, completePaymentForm, PaymentFormData } from '@/services/payment-api';

interface PaymentFormProps {
  isOpen: boolean;
  onClose: () => void;
  planDetails: {
    name: string;
    amount: number;
    originalAmount?: number;
    paymentButtonId: string;
  };
}

const PaymentForm: React.FC<PaymentFormProps> = ({ isOpen, onClose, planDetails }) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    fullName: '',
    age: '',
    cityState: '',
    email: '',
    phoneNumber: '',
    heardFrom: '',
    registeredFor: planDetails.name,
    amount: planDetails.amount
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
      
      // After 2 seconds, show payment
      setTimeout(() => {
        setShowThankYou(false);
        setShowPayment(true);
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      // Continue with payment flow even if backend is not available
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setShowPayment(true);
      }, 2000);
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
          script.setAttribute('data-payment_button_id', planDetails.paymentButtonId);
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
  }, [showPayment, planDetails.paymentButtonId]);

  const handlePaymentSuccess = async (event: MessageEvent) => {
    if (event.data && event.data.type === 'razorpay_payment_success') {
      try {
        // Complete the payment form with payment details
        await completePaymentForm(formData, {
          razorpayOrderId: event.data.orderId,
          razorpayPaymentId: event.data.paymentId,
          razorpaySignature: event.data.signature,
          amount: planDetails.amount
        });

        // Show success message
        alert(`Payment successful! Your ${planDetails.name} has been confirmed. We will contact you soon.`);
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
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="bg-primary text-white relative">
          <CardTitle className="text-center text-lg">
            {planDetails.name} Registration Form
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
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    <SelectItem value="whatsapp-community">WhatsApp Community</SelectItem>
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
                  `👉 Proceed to Pay - ₹${planDetails.amount}`
                )}
              </Button>
            </form>
          )}

          {showThankYou && (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Thank you, {formData.fullName.split(' ')[0]}!
              </h3>
              <p className="text-gray-600 mb-4">
                Your details have been recorded successfully. Please proceed to complete the payment to confirm your {planDetails.name}.
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
                Complete Your Payment
              </h3>
              <p className="text-gray-600 mb-6">
                Please complete the payment below to confirm your {planDetails.name}.
              </p>
              <div ref={paymentFormRef} className="flex justify-center"></div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentForm;
