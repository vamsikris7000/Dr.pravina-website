import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Users, 
  Calendar, 
  BookOpen, 
  BarChart3, 
  Clock, 
  MapPin,
  Edit,
  Save,
  X,
  LogOut,
  RefreshCw,
  MessageSquare,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import AdminLogin from "@/components/AdminLogin";
import { 
  fetchPatients, 
  fetchAppointments, 
  fetchMessages,
  fetchAllWorkshops,
  updatePatientStatus, 
  updateAppointmentStatus,
  updateMessageStatus,
  updateWorkshop,
  deletePatient,
  deleteAppointment,
  deleteMessage,
  deleteWorkshop
} from "@/services/api";

interface Patient {
  _id: string;
  name: string;
  age: number;
  city: string;
  phoneNumber: number;
  mainHealthConcern: string;
  symptomsExperienced: string;
  healthGoals: string;
  currentLifestyle: string;
  triedProgramsBefore: string;
  status: string;
  createdAt: string;
}

interface Appointment {
  _id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  plan_name: string;
  bookingType: string;
  status: string;
  createdAt: string;
}

interface Message {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

interface Workshop {
  _id: string;
  title: string;
  subtitle: string;
  audience: string;
  icon: string;
  day: string;
  date: string;
  time: string;
  price: number;
  features: string[];
  description: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const AdminDashboard = () => {
  const [editingWorkshops, setEditingWorkshops] = useState<{[key: string]: boolean}>({});
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [patientsLoading, setPatientsLoading] = useState(false);
  const [appointmentsLoading, setAppointmentsLoading] = useState(false);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [workshopsLoading, setWorkshopsLoading] = useState(false);
  const [showAllMessages, setShowAllMessages] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      loadData();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log('showAllMessages state changed to:', showAllMessages);
  }, [showAllMessages]);

  useEffect(() => {
    console.log('Button rendering - showAllMessages:', showAllMessages, 'messages.length:', messages.length);
  }, [showAllMessages, messages.length]);

  const loadData = async () => {
    setPatientsLoading(true);
    setAppointmentsLoading(true);
    setMessagesLoading(true);
    setWorkshopsLoading(true);
    
    try {
      const [patientsData, appointmentsData, messagesData, workshopsData] = await Promise.all([
        fetchPatients(),
        fetchAppointments(),
        fetchMessages(),
        fetchAllWorkshops()
      ]);
      
      // Check if responses are arrays (success) or error objects
      setPatients(Array.isArray(patientsData) ? patientsData : []);
      setAppointments(Array.isArray(appointmentsData) ? appointmentsData : []);
      setMessages(Array.isArray(messagesData) ? messagesData : []);
      console.log('Workshops data received:', workshopsData);
      const workshopsArray = Array.isArray(workshopsData) ? workshopsData : [];
      console.log('Setting workshops:', workshopsArray.length, 'workshops');
      setWorkshops(workshopsArray);
    } catch (error) {
      console.error('Error loading data:', error);
      // Set empty arrays on error to prevent crashes
      setPatients([]);
      setAppointments([]);
      setMessages([]);
      setWorkshops([]);
    } finally {
      setPatientsLoading(false);
      setAppointmentsLoading(false);
      setMessagesLoading(false);
      setWorkshopsLoading(false);
      setLoading(false);
    }
  };

  const handleLogin = (token: string) => {
    setIsAuthenticated(true);
    loadData();
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setPatients([]);
    setAppointments([]);
  };

  const handlePatientStatusUpdate = async (patientId: string, newStatus: string) => {
    try {
      await updatePatientStatus(patientId, newStatus);
      setPatients(prev => prev.map(p => 
        p._id === patientId ? { ...p, status: newStatus } : p
      ));
    } catch (error) {
      console.error('Error updating patient status:', error);
    }
  };

  const handleAppointmentStatusUpdate = async (appointmentId: string, newStatus: string) => {
    try {
      await updateAppointmentStatus(appointmentId, newStatus);
      setAppointments(prev => prev.map(a => 
        a._id === appointmentId ? { ...a, status: newStatus } : a
      ));
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  const handlePatientDelete = async (patientId: string) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      try {
        await deletePatient(patientId);
        setPatients(prev => prev.filter(p => p._id !== patientId));
      } catch (error) {
        console.error('Error deleting patient:', error);
      }
    }
  };

  const handleAppointmentDelete = async (appointmentId: string) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await deleteAppointment(appointmentId);
        setAppointments(prev => prev.filter(a => a._id !== appointmentId));
      } catch (error) {
        console.error('Error deleting appointment:', error);
      }
    }
  };

  const handleMessageStatusUpdate = async (messageId: string, newStatus: string) => {
    try {
      await updateMessageStatus(messageId, newStatus);
      setMessages(prev => prev.map(m => 
        m._id === messageId ? { ...m, status: newStatus } : m
      ));
    } catch (error) {
      console.error('Error updating message status:', error);
    }
  };

  const handleMessageDelete = async (messageId: string) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteMessage(messageId);
        setMessages(prev => prev.filter(m => m._id !== messageId));
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    setIsMessageDialogOpen(true);
  };

  const handleToggleMessages = () => {
    console.log('=== TOGGLE BUTTON CLICKED ===');
    console.log('Current showAllMessages state:', showAllMessages);
    console.log('Messages length:', messages.length);
    console.log('Button should show:', showAllMessages ? 'Show Less' : 'Show All');
    
    setShowAllMessages(prev => {
      const newState = !prev;
      console.log('Setting showAllMessages from', prev, 'to', newState);
      return newState;
    });
  };

  const handleWorkshopEdit = (id: string) => {
    setEditingWorkshops(prev => ({ ...prev, [id]: true }));
  };

  const handleWorkshopSave = async (id: string, newDay: string, newDate: string, newTime: string) => {
    try {
      await updateWorkshop(id, { day: newDay, date: newDate, time: newTime });
      setWorkshops(prev => prev.map(w => 
        w._id === id ? { ...w, day: newDay, date: newDate, time: newTime } : w
      ));
      setEditingWorkshops(prev => ({ ...prev, [id]: false }));
      
      // Show success message
      alert('Workshop updated successfully! The changes will be reflected on the website.');
    } catch (error) {
      console.error('Error updating workshop:', error);
      alert('Failed to update workshop. Please try again.');
    }
  };

  const handleWorkshopCancel = (id: string) => {
    setEditingWorkshops(prev => ({ ...prev, [id]: false }));
  };

  const handleWorkshopDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this workshop?')) {
      try {
        await deleteWorkshop(id);
        setWorkshops(prev => prev.filter(w => w._id !== id));
      } catch (error) {
        console.error('Error deleting workshop:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Doctor's Panel</h1>
            <p className="text-gray-600">Manage patients, appointments, and workshops</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="patients" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Patients ({patients.length})
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Appointments ({appointments.length})
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages ({messages.length})
            </TabsTrigger>
            <TabsTrigger value="workshops" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Workshops ({workshops.length})
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{Array.isArray(patients) ? patients.length : 0}</div>
                  <p className="text-xs text-muted-foreground">
                    {Array.isArray(patients) ? patients.filter(p => p.status === 'new').length : 0} new submissions
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{Array.isArray(appointments) ? appointments.length : 0}</div>
                  <p className="text-xs text-muted-foreground">
                    {Array.isArray(appointments) ? appointments.filter(a => a.status === 'pending').length : 0} pending
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Workshops</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{workshops.length}</div>
                  <p className="text-xs text-muted-foreground">6 workshops available</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Patient Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.isArray(patients) ? patients.slice(0, 3).map((patient) => (
                    <div key={patient._id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{patient.name}</h4>
                        <p className="text-sm text-gray-600">{patient.mainHealthConcern}</p>
                        <p className="text-xs text-gray-500">{patient.city}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">
                          {new Date(patient.createdAt).toLocaleDateString()}
                        </p>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          patient.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                          patient.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'
                        }`}>
                          {patient.status}
                        </span>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-4">
                      <p className="text-sm text-gray-500">No patients data available</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>


          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-6">
            <Card>
              <CardHeader className="flex justify-between items-center">
                <CardTitle>Patient Submissions</CardTitle>
                <Button variant="outline" size="sm" onClick={loadData}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </CardHeader>
              <CardContent>
                {patientsLoading ? (
                  <div className="text-center py-8">
                    <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
                    <p>Loading patients...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Array.isArray(patients) ? patients.map((patient) => (
                      <div key={patient._id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">{patient.name}</h4>
                            <p className="text-sm text-gray-600">Age: {patient.age} | City: {patient.city}</p>
                            <p className="text-sm text-gray-600">Phone: {patient.phoneNumber}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Select
                              value={patient.status}
                              onValueChange={(value) => handlePatientStatusUpdate(patient._id, value)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="consulted">Consulted</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handlePatientDelete(patient._id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm"><strong>Health Concern:</strong> {patient.mainHealthConcern}</p>
                          <p className="text-sm"><strong>Symptoms:</strong> {patient.symptomsExperienced}</p>
                          {patient.healthGoals && (
                            <p className="text-sm"><strong>Goals:</strong> {patient.healthGoals}</p>
                          )}
                          {patient.currentLifestyle && (
                            <p className="text-sm"><strong>Lifestyle:</strong> {patient.currentLifestyle}</p>
                          )}
                          {patient.triedProgramsBefore && (
                            <p className="text-sm"><strong>Previous Programs:</strong> {patient.triedProgramsBefore}</p>
                          )}
                          <p className="text-xs text-gray-500 mt-2">
                            Submitted: {new Date(patient.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )) : (
                      <div className="text-center py-4">
                        <p className="text-sm text-gray-500">No patients data available</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader className="flex justify-between items-center">
                <CardTitle>Scheduled Appointments</CardTitle>
                <Button variant="outline" size="sm" onClick={loadData}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </CardHeader>
              <CardContent>
                {appointmentsLoading ? (
                  <div className="text-center py-8">
                    <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
                    <p>Loading appointments...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Array.isArray(appointments) ? appointments.map((appointment) => (
                      <div key={appointment._id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{appointment.first_name} {appointment.last_name}</h4>
                            <p className="text-sm text-gray-600">Phone: {appointment.phone_number}</p>
                            <p className="text-sm text-gray-600">Plan: {appointment.plan_name}</p>
                            <p className="text-sm text-gray-600">Type: {appointment.bookingType}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Select
                              value={appointment.status}
                              onValueChange={(value) => handleAppointmentStatusUpdate(appointment._id, value)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleAppointmentDelete(appointment._id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(appointment.createdAt).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {new Date(appointment.createdAt).toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    )) : (
                      <div className="text-center py-4">
                        <p className="text-sm text-gray-500">No appointments data available</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Workshops Tab */}
          <TabsContent value="workshops" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Workshop Management</CardTitle>
                  <p className="text-sm text-gray-600">Update workshop dates and times</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.location.reload()}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </CardHeader>
              <CardContent>
                {workshopsLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <RefreshCw className="h-6 w-6 animate-spin mr-2" />
                    <span>Loading workshops...</span>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {workshops.map((workshop) => (
                      <div key={workshop._id} className="border rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="text-3xl">{workshop.icon}</div>
                            <div>
                              <h4 className="font-semibold text-lg">{workshop.title}</h4>
                              <p className="text-sm text-gray-600">{workshop.subtitle}</p>
                              <p className="text-xs text-gray-500">{workshop.audience}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleWorkshopEdit(workshop._id)}
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleWorkshopDelete(workshop._id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>

                        {editingWorkshops[workshop._id] ? (
                          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                            <div className="grid grid-cols-3 gap-4">
                              <div>
                                <Label htmlFor={`day-${workshop._id}`}>Day</Label>
                                <Input
                                  id={`day-${workshop._id}`}
                                  defaultValue={workshop.day}
                                  className="mt-1"
                                />
                              </div>
                              <div>
                                <Label htmlFor={`date-${workshop._id}`}>Date</Label>
                                <Input
                                  id={`date-${workshop._id}`}
                                  defaultValue={workshop.date}
                                  className="mt-1"
                                  placeholder="e.g., 8th Aug"
                                />
                              </div>
                              <div>
                                <Label htmlFor={`time-${workshop._id}`}>Time</Label>
                                <Input
                                  id={`time-${workshop._id}`}
                                  defaultValue={workshop.time}
                                  className="mt-1"
                                  placeholder="e.g., 4:50 PM - 8:00 PM"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                onClick={() => {
                                  const dayInput = document.getElementById(`day-${workshop._id}`) as HTMLInputElement;
                                  const dateInput = document.getElementById(`date-${workshop._id}`) as HTMLInputElement;
                                  const timeInput = document.getElementById(`time-${workshop._id}`) as HTMLInputElement;
                                  handleWorkshopSave(workshop._id, dayInput.value, dateInput.value, timeInput.value);
                                }}
                              >
                                <Save className="h-4 w-4 mr-2" />
                                Save
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleWorkshopCancel(workshop._id)}
                              >
                                <X className="h-4 w-4 mr-2" />
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {workshop.day}, {workshop.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {workshop.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="text-green-600 font-medium">₹{workshop.price}</span>
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader className="flex justify-between items-center">
                <CardTitle>Messages from Website</CardTitle>
                <Button variant="outline" size="sm" onClick={loadData}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </CardHeader>
              <CardContent>
                {messagesLoading ? (
                  <div className="text-center py-8">
                    <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
                    <p>Loading messages...</p>
                  </div>
                ) : !Array.isArray(messages) || messages.length === 0 ? (
                  <div className="text-center py-8">
                    <MessageSquare className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">No messages yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Array.isArray(messages) ? (
                      <div className="max-h-96 overflow-y-auto border rounded-lg bg-gray-50">
                        <div className="space-y-2 p-3">
                          {messages.map((message, index) => (
                            <div 
                              key={message._id} 
                              className="flex items-center justify-between p-3 border rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm"
                              onClick={() => handleMessageClick(message)}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400 font-mono">#{index + 1}</span>
                                <div>
                                  <h4 className="font-semibold text-sm">{message.firstName} {message.lastName}</h4>
                                  <p className="text-xs text-gray-600">{message.subject}</p>
                                  <p className="text-xs text-gray-500">{message.email}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-gray-600">
                                  {new Date(message.createdAt).toLocaleDateString()}
                                </p>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  message.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                                  message.status === 'read' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-green-100 text-green-800'
                                }`}>
                                  {message.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-sm text-gray-500">No messages data available</p>
                      </div>
                    )}
                    
                    <div className="text-center pt-2 text-xs text-gray-500 mb-2">
                      Showing {Array.isArray(messages) ? messages.length : 0} of {Array.isArray(messages) ? messages.length : 0} messages
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Message Detail Dialog */}
      <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Message Details</DialogTitle>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Name</Label>
                  <p className="text-lg font-semibold">{selectedMessage.firstName} {selectedMessage.lastName}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Email</Label>
                  <p className="text-lg">{selectedMessage.email}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Phone</Label>
                  <p className="text-lg">{selectedMessage.phoneNumber}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Subject</Label>
                  <p className="text-lg">{selectedMessage.subject}</p>
                </div>
                <div className="col-span-2">
                  <Label className="text-sm font-medium text-gray-600">Message</Label>
                  <div className="mt-2 p-4 bg-gray-50 rounded-lg border max-h-48 overflow-y-auto">
                    <p className="text-lg leading-relaxed whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Status</Label>
                  <Select
                    value={selectedMessage.status}
                    onValueChange={(value) => {
                      handleMessageStatusUpdate(selectedMessage._id, value);
                      setSelectedMessage({ ...selectedMessage, status: value });
                    }}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="read">Read</SelectItem>
                      <SelectItem value="replied">Replied</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Received</Label>
                  <p className="text-lg">{new Date(selectedMessage.createdAt).toLocaleString()}</p>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setIsMessageDialogOpen(false)}
                >
                  Close
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    handleMessageDelete(selectedMessage._id);
                    setIsMessageDialogOpen(false);
                  }}
                >
                  Delete Message
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard; 