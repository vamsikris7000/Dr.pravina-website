const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/.netlify/functions' 
  : 'http://localhost:5001/api';

export interface PaymentFormData {
  fullName: string;
  age: string;
  cityState: string;
  email: string;
  phoneNumber: string;
  heardFrom: string;
  registeredFor: string;
  amount: number;
}

export const submitPaymentForm = async (formData: PaymentFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/payment-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting payment form:', error);
    throw error;
  }
};

export const completePaymentForm = async (formData: PaymentFormData, paymentDetails: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/payment-form/complete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        ...paymentDetails
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to complete form');
    }

    return await response.json();
  } catch (error) {
    console.error('Error completing payment form:', error);
    throw error;
  }
};

export const getPaymentForms = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/payment-forms`);
    if (!response.ok) throw new Error('Failed to fetch payment forms');
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching payment forms:', error);
    return [];
  }
};

export const updatePaymentFormStatus = async (id: string, status: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/payment-form/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ serviceStatus: status }),
    });
    if (!response.ok) throw new Error('Failed to update payment form status');
    return await response.json();
  } catch (error) {
    console.error('Error updating payment form status:', error);
    throw error;
  }
};
