const API_BASE_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5001' : '/.netlify/functions');

// Add cache busting for production
const CACHE_BUSTER = window.location.hostname !== 'localhost' ? `?v=${Date.now()}` : '';

// Helper function to get the correct API path
const getApiPath = (endpoint) => {
  if (window.location.hostname === 'localhost') {
    return `${API_BASE_URL}/api${endpoint}`;
  }
  // For Netlify functions, use the query parameter structure
  return `${API_BASE_URL}/api?path=${endpoint.replace('/', '')}${CACHE_BUSTER}`;
};

// Get token from localStorage
const getToken = () => localStorage.getItem('adminToken');

// API headers with authentication
const getHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

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
  try {
    const response = await fetch(getApiPath('/patients_info'), {
      headers: getHeaders(),
    });
    
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
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Workshops API returned non-JSON response:', contentType);
      throw new Error('API returned non-JSON response');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching workshops:', error);
    // Return fallback data instead of throwing
    return [
      {
        _id: "1",
        title: "The Weight Reset for Women",
        subtitle: "Not Just Weight Loss, A Full Body Reset",
        audience: "For All Women 18+",
        icon: "👩🏻‍⚕️",
        day: "Saturday",
        date: "23rd Aug",
        time: "9:00 AM - 11:00 AM",
        price: 499,
        features: [
          "Understand your hormones & weight connection",
          "Tackle belly fat, cravings & low energy",
          "Anti-inflammatory nutrition made practical",
          "Smart movement & strength strategies",
          "Stress, sleep & metabolism mastery",
          "Build habits that last, not bounce back"
        ],
        description: "Transform your relationship with weight through hormone-aware strategies.",
        isActive: true,
        order: 1,
        status: 'live',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        _id: "2",
        title: "PCOS Unplugged",
        subtitle: "Your Hormones, Hair, Skin & Sanity",
        audience: "For Teens & Young Women",
        icon: "🌸",
        day: "Friday",
        date: "29th Aug",
        time: "6:00 PM - 8:00 PM",
        price: 499,
        features: [
          "Decode your hormones & cycle",
          "Period problems & PCOS types", 
          "Skin, hair, mood & weight tips",
          "Menstrual cup basics & hygiene",
          "PCOS-friendly food & movement",
          "Cycle syncing & stress hacks"
        ],
        description: "Navigate PCOS with confidence through practical lifestyle strategies.",
        isActive: true,
        order: 2,
        status: 'live',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        _id: "3",
        title: "Pre-Pregnancy Power Couple",
        subtitle: "Plan Parenthood with Purpose",
        audience: "For Couples Planning Pregnancy",
        icon: "👫🏻",
        day: "Friday",
        date: "5th Sep",
        time: "6:00 PM - 8:00 PM",
        price: 499,
        features: [
          "Fertility nutrition for both partners",
          "Cycle tracking & fertile window basics",
          "Lifestyle shifts to boost conception",
          "Detox, stress & sleep prep",
          "Emotional alignment & partner mindset",
          "Myths vs science of getting pregnant"
        ],
        description: "Prepare for pregnancy with evidence-based strategies for both partners.",
        isActive: true,
        order: 3,
        status: 'live',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        _id: "4",
        title: "Pregnancy Wellness Workshop",
        subtitle: "Feel Nourished, Calm & Connected",
        audience: "For Expecting Mothers (All Trimesters)",
        icon: "🤱🏻",
        day: "Coming Soon",
        date: "Coming Soon",
        time: "Coming Soon",
        price: 499,
        features: [
          "Pregnancy nutrition & meal planning",
          "Safe movement & exercise guidelines",
          "Stress management & mental wellness",
          "Sleep optimization & energy boosters",
          "Partner involvement & support strategies",
          "Birth preparation & postpartum planning"
        ],
        description: "Nurture yourself and your baby with comprehensive pregnancy wellness guidance.",
        isActive: true,
        order: 4,
        status: 'coming-soon',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        _id: "5",
        title: "Confident Breastfeeding",
        subtitle: "Nurture Your Baby. Reclaim Your Body.",
        audience: "For New & Expecting Moms",
        icon: "🍼",
        day: "Coming Soon",
        date: "Coming Soon",
        time: "Coming Soon",
        price: 499,
        features: [
          "Lactation techniques & myths",
          "Latch, supply, positions & pumping",
          "Recovery after birth for body, mind, sleep",
          "Postpartum nutrition & emotional support",
          "Indian rituals & modern healing practices",
          "Space for real talk, not just survival"
        ],
        description: "Supporting new mothers through postpartum recovery and breastfeeding.",
        isActive: true,
        order: 5,
        status: 'coming-soon',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        _id: "6",
        title: "First Foods",
        subtitle: "Foundations of Child Nutrition & Lifestyle",
        audience: "For Moms with Children (6 Months to 5 Years)",
        icon: "👨‍👩‍👧‍👦",
        day: "Coming Soon",
        date: "Coming Soon",
        time: "Coming Soon",
        price: 499,
        features: [
          "When & how to start solids",
          "Daily feeding plans & schedules",
          "Immunity-boosting foods & habits",
          "Gut health, picky eating & meal battles",
          "Holistic child lifestyle routines (food, sleep, screen, play)",
          "Indian food wisdom with modern evidence"
        ],
        description: "Learn essential strategies for nurturing healthy and happy children through proper nutrition and effective parenting techniques.",
        isActive: true,
        order: 6,
        status: 'coming-soon',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
  }
};

export const fetchAllWorkshops = async () => {
  try {
    const response = await fetch(getApiPath('/workshops/all'), {
      headers: getHeaders(),
    });
    
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