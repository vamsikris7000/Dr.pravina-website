const API_BASE_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5001' : '/.netlify/functions');

// Add cache busting for production
const CACHE_BUSTER = window.location.hostname !== 'localhost' ? `?v=${Date.now()}` : '';

// Helper function to get the correct API path
const getApiPath = (endpoint) => {
  if (window.location.hostname === 'localhost') {
    return `${API_BASE_URL}/api${endpoint}`;
  }
  // For Netlify functions, we need to pass the path as a query parameter
  return `${API_BASE_URL}/api?path=${encodeURIComponent(endpoint)}${CACHE_BUSTER}`;
};

// Get token from localStorage
const getToken = () => localStorage.getItem('adminToken');

// API headers with authentication
const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${getToken()}`
});

// Auth API
export const loginAdmin = async (email, password) => {
  try {
    const apiPath = getApiPath('/auth');
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
  const response = await fetch(getApiPath('/patients'), {
    headers: getHeaders(),
  });
  return response.json();
};

export const createPatient = async (patientData) => {
  const response = await fetch(getApiPath('/patients'), {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(patientData),
  });
  return response.json();
};

export const updatePatientStatus = async (id, status) => {
  const response = await fetch(getApiPath(`/patients/${id}`), {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const deletePatient = async (id) => {
  const response = await fetch(getApiPath(`/patients/${id}`), {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
};

// Appointments API
export const fetchAppointments = async () => {
  const response = await fetch(getApiPath('/appointments'), {
    headers: getHeaders(),
  });
  return response.json();
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
  const response = await fetch(getApiPath('/messages'), {
    headers: getHeaders(),
  });
  return response.json();
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
  const response = await fetch(getApiPath('/workshops'), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const fetchAllWorkshops = async () => {
  const response = await fetch(getApiPath('/workshops/all'), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
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