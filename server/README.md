# Path'o'Life Admin Backend

This is the backend server for the Path'o'Life admin dashboard that connects to MongoDB Atlas.

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Environment Variables
The `config.env` file is already configured with your MongoDB connection string and admin credentials.

### 3. Start the Server
```bash
npm run dev
```

The server will start on `http://localhost:5000`

### 4. Test the Connection
Visit `http://localhost:5000/health` to verify the server is running.

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login

### Patients
- `GET /api/patients` - Get all patients
- `POST /api/patients` - Create new patient
- `PATCH /api/patients/:id` - Update patient status
- `DELETE /api/patients/:id` - Delete patient

### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create new appointment
- `PATCH /api/appointments/:id` - Update appointment status
- `DELETE /api/appointments/:id` - Delete appointment

## Admin Login
- **Email:** your_admin_email
- **Password:** your_admin_password

## Database Collections
- `patients_info` - Patient submissions from the website
- `appointments` - Appointment bookings

## Features
- ✅ JWT Authentication
- ✅ MongoDB Atlas Integration
- ✅ Patient Management
- ✅ Appointment Management
- ✅ Status Updates
- ✅ Delete Operations
- ✅ Real-time Data Sync 