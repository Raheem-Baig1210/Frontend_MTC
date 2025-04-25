import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './login';
import AdminDashboard from "./AdminDashboard";
import Centers from './Center';
import Attendance from './Attendace';
import Students from './students';
import Tutor from './tutors';
import TutorDashboard from './LandingPages/Tutor/TutorDashboard';
import AddCenter from './AddCenter';
import DeleteCenter from './DeleteCenter';
import AddTutor from './AddTutor';
import DeleteTutor from './DeleteTutor';
import TutorProfile from './TutorProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/tutor-dashboard' element={<TutorDashboard />} />
        <Route path='/centers' element={<Centers />} />
        <Route path='/tutors' element={<Tutor />} />
        <Route path='/students' element={<Students />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/add-center' element={<AddCenter />} />
        <Route path='/delete-center' element={<DeleteCenter />} />
        <Route path='/add-tutor' element={<AddTutor/>} />
        <Route path='/delete-tutor' element={<DeleteTutor/>} />
        <Route path="/tutor-profile" element={<TutorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
