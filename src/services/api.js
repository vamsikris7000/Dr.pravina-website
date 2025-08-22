const API_BASE_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5001' : '/.netlify/functions');

// Add cache busting for production
const CACHE_BUSTER = window.location.hostname !== 'localhost' ? `?v=${Date.now()}_${Math.random().toString(36).substr(2, 9)}` : '';

// Helper function to get the correct API path
const getApiPath = (endpoint) => {
  if (window.location.hostname === 'localhost') {
    return `${API_BASE_URL}/api${endpoint}`;
  }
  // For Netlify functions, use the query parameter structure
  // Add cache buster as a separate query parameter, not appended to path
  return `${API_BASE_URL}/api?path=${endpoint.replace('/', '')}&${CACHE_BUSTER.replace('?', '')}`;
};

// Get token from localStorage
const getToken = () => {
  const token = localStorage.getItem('adminToken');
  
  // Check if token exists and is not expired
  if (token) {
    try {
      // Decode JWT to check expiration (without verification)
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      
      if (payload.exp && payload.exp < currentTime) {
        console.log('Token expired, removing from localStorage');
        localStorage.removeItem('adminToken');
        return null;
      }
    } catch (error) {
      console.log('Invalid token format, removing from localStorage');
      localStorage.removeItem('adminToken');
      return null;
    }
  }
  
  return token;
};

// API headers with authentication
const getHeaders = () => {
  const token = getToken();
  console.log('=== API HEADERS DEBUG ===');
  console.log('Token from localStorage:', token ? 'FOUND' : 'NOT FOUND');
  console.log('Token preview:', token ? `${token.substring(0, 20)}...` : 'N/A');
  console.log('Headers being sent:', {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token.substring(0, 20)}...` })
  });
  console.log('=== END API HEADERS DEBUG ===');
  
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Auth API
export const loginAdmin = async (email, password) => {
  try {
    // Auth endpoint should be direct, not through the API path
    const apiPath = window.location.hostname === 'localhost' 
      ? `${API_BASE_URL}/auth`
      : '/.netlify/functions/auth';
      
    console.log('=== LOGIN DEBUG INFO ===');
    console.log('Attempting login to:', apiPath);
    console.log('Environment:', import.meta.env.MODE);
    console.log('API Base URL:', API_BASE_URL);
    console.log('Email provided:', !!email);
    console.log('Password provided:', !!password);
    console.log('=== END LOGIN DEBUG ===');
    
    const response = await fetch(apiPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });
    
    console.log('Login response status:', response.status);
    console.log('Login response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      console.error('Login failed with status:', response.status);
      let errorText;
      try {
        const errorData = await response.json();
        errorText = JSON.stringify(errorData);
        console.error('Error response data:', errorData);
      } catch (parseError) {
        errorText = await response.text();
        console.error('Error response text:', errorText);
      }
      
      // Create a more informative error
      const error = new Error(`HTTP ${response.status}: ${errorText}`);
      error.status = response.status;
      error.response = errorText;
      throw error;
    }
    
    const data = await response.json();
    console.log('Login successful:', { hasToken: !!data.token, user: data.user });
    console.log('Token preview:', data.token ? `${data.token.substring(0, 20)}...` : 'N/A');
    return data;
  } catch (error) {
    console.error('Login error details:', {
      message: error.message,
      status: error.status,
      response: error.response,
      stack: error.stack
    });
    throw error;
  }
};

// Patients API
export const fetchPatients = async () => {
  try {
    const response = await fetch(getApiPath('/patients_info'), {
      headers: getHeaders(),
    });
    
    if (response.status === 401) {
      console.log('Token expired, attempting to re-login...');
      // Clear expired token
      localStorage.removeItem('adminToken');
      // Redirect to login or trigger re-login
      window.location.href = '/admin';
      return [];
    }
    
    if (!response.ok) {
      console.error('Patients API error:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching patients:', error);
    return [];
  }
};

export const createPatient = async (patientData) => {
  const response = await fetch(getApiPath('/patients_info'), {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(patientData),
  });
  return response.json();
};

export const updatePatientStatus = async (id, status) => {
  const response = await fetch(getApiPath(`/patients_info/${id}`), {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const deletePatient = async (id) => {
  const response = await fetch(getApiPath(`/patients_info/${id}`), {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
};

// Appointments API
export const fetchAppointments = async () => {
  try {
    const response = await fetch(getApiPath('/appointments'), {
      headers: getHeaders(),
    });
    
    if (response.status === 401) {
      console.log('Token expired, attempting to re-login...');
      localStorage.removeItem('adminToken');
      window.location.href = '/admin';
      return [];
    }
    
    if (!response.ok) {
      console.error('Appointments API error:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return [];
  }
};

export const createAppointment = async (appointmentData) => {
  const response = await fetch(getApiPath('/appointments'), {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(appointmentData),
  });
  return response.json();
};

export const updateAppointmentStatus = async (id, status) => {
  const response = await fetch(getApiPath(`/appointments/${id}`), {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const deleteAppointment = async (id) => {
  const response = await fetch(getApiPath(`/appointments/${id}`), {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
};

// Messages API
export const fetchMessages = async () => {
  try {
    const response = await fetch(getApiPath('/messages'), {
      headers: getHeaders(),
    });
    
    if (response.status === 401) {
      console.log('Token expired, attempting to re-login...');
      localStorage.removeItem('adminToken');
      window.location.href = '/admin';
      return [];
    }
    
    if (!response.ok) {
      console.error('Messages API error:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
};

export const createMessage = async (messageData) => {
  const response = await fetch(getApiPath('/messages'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageData),
  });
  return response.json();
};

export const updateMessageStatus = async (id, status) => {
  const response = await fetch(getApiPath(`/messages/${id}`), {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const deleteMessage = async (id) => {
  const response = await fetch(getApiPath(`/messages/${id}`), {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
};

// Workshops API
export const fetchWorkshops = async () => {
  try {
    const response = await fetch(getApiPath('/workshops'), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // Check if response is ok
    if (!response.ok) {
      console.error('Workshops API error:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    // Check if response is JSON - be more flexible with content-type
    const contentType = response.headers.get('content-type');
    if (!contentType || (!contentType.includes('application/json') && !contentType.includes('text/plain'))) {
      console.error('Workshops API returned non-JSON response:', contentType);
      throw new Error('API returned non-JSON response');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching workshops:', error);
    // Return empty array instead of fallback data to force real data usage
    return [];
  }
};

export const fetchAllWorkshops = async () => {
  try {
    const response = await fetch(getApiPath('/workshops/all'), {
      headers: getHeaders(),
    });
    
    if (response.status === 401) {
      console.log('Token expired, attempting to re-login...');
      localStorage.removeItem('adminToken');
      window.location.href = '/admin';
      return [];
    }
    
    if (!response.ok) {
      console.error('Workshops API error:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching workshops:', error);
    return [];
  }
};

export const createWorkshop = async (workshopData) => {
  const response = await fetch(getApiPath('/workshops'), {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(workshopData),
  });
  return response.json();
};

export const updateWorkshop = async (id, workshopData) => {
  const response = await fetch(getApiPath(`/workshops/${id}`), {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(workshopData),
  });
  return response.json();
};

export const deleteWorkshop = async (id) => {
  const response = await fetch(getApiPath(`/workshops/${id}`), {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
}; 



// Payment Forms API
export const fetchPaymentForms = async () => {
  try {
    const response = await fetch(getApiPath('/payment-forms'), {
      headers: getHeaders(),
    });
    
    if (response.status === 401) {
      console.log('Token expired, attempting to re-login...');
      localStorage.removeItem('adminToken');
      window.location.href = '/admin';
      return [];
    }
    
    if (!response.ok) {
      console.error('Payment Forms API error:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching payment forms:', error);
    return [];
  }
};

export const updatePaymentFormStatus = async (id, status) => {
  const response = await fetch(getApiPath(`/payment-form/${id}/status`), {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ serviceStatus: status }),
  });
  return response.json();
};

// Quiz Leads API
export const fetchQuizLeads = async () => {
  try {
    const response = await fetch(getApiPath('/quiz-leads'), {
      headers: getHeaders(),
    });
    
    if (response.status === 401) {
      console.log('Token expired, attempting to re-login...');
      localStorage.removeItem('adminToken');
      window.location.href = '/admin';
      return [];
    }
    
    if (!response.ok) {
      console.error('Quiz Leads API error:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching quiz leads:', error);
    return [];
  }
};