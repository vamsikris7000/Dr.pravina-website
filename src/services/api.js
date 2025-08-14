const API_BASE_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5001/api' : '/.netlify/functions');

// Get token from localStorage
const getToken = () => localStorage.getItem('adminToken');

// API headers with authentication
const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${getToken()}`
});

// Auth API
export const loginAdmin = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

// Patients API
export const fetchPatients = async () => {
  const response = await fetch(`${API_BASE_URL}/api?path=patients`, {
    headers: getHeaders(),
  });
  return response.json();
};

export const createPatient = async (patientData) => {
  const response = await fetch(`${API_BASE_URL}/api?path=patients`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(patientData),
  });
  return response.json();
};

export const updatePatientStatus = async (id, status) => {
  const response = await fetch(`${API_BASE_URL}/api?path=patients/${id}`, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const deletePatient = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api?path=patients/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
};

// Appointments API
export const fetchAppointments = async () => {
  const response = await fetch(`${API_BASE_URL}/api?path=appointments`, {
    headers: getHeaders(),
  });
  return response.json();
};

export const createAppointment = async (appointmentData) => {
  const response = await fetch(`${API_BASE_URL}/api?path=appointments`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(appointmentData),
  });
  return response.json();
};

export const updateAppointmentStatus = async (id, status) => {
  const response = await fetch(`${API_BASE_URL}/api?path=appointments/${id}`, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const deleteAppointment = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api?path=appointments/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
};

// Messages API
export const fetchMessages = async () => {
  const response = await fetch(`${API_BASE_URL}/api?path=messages`, {
    headers: getHeaders(),
  });
  return response.json();
};

export const createMessage = async (messageData) => {
  const response = await fetch(`${API_BASE_URL}/api?path=messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageData),
  });
  return response.json();
};

export const updateMessageStatus = async (id, status) => {
  const response = await fetch(`${API_BASE_URL}/api?path=messages/${id}`, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const deleteMessage = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api?path=messages/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
};

// Workshops API
export const fetchWorkshops = async () => {
  const response = await fetch(`${API_BASE_URL}/api?path=workshops`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const fetchAllWorkshops = async () => {
  const response = await fetch(`${API_BASE_URL}/api?path=workshops/all`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const createWorkshop = async (workshopData) => {
  const response = await fetch(`${API_BASE_URL}/api?path=workshops`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(workshopData),
  });
  return response.json();
};

export const updateWorkshop = async (id, workshopData) => {
  const response = await fetch(`${API_BASE_URL}/api?path=workshops/${id}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(workshopData),
  });
  return response.json();
};

export const deleteWorkshop = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api?path=workshops/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
}; 