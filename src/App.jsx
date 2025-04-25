// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
// import ReactDom from "react-dom"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import HomePage from "./LandingPages/homepage/HomePage";
import LoginAdmin from "./LandingPages/Admin/Admin_login";
import LoginTutor from "./LandingPages/Tutor/Tutor_login";
import AdminDashboard from "./LandingPages/Admin/AdminDashboard";
import Centers from "./LandingPages/Admin/Center";
import Attendance from "./LandingPages/Admin/Attendace";
import Students from "./LandingPages/Admin/students";
import Tutor from "./LandingPages/Admin/tutors";
import TutorDashboard from "./LandingPages/Tutor/TutorDashboard";
// import TutorNavbar from './LandingPages/Components/TutorNavbar';
import StudentList from "./LandingPages/Tutor/StudentList";
// import HomePage from './LandingPages/homepage/HomePage';
import TutorProfile from "./LandingPages/Admin/TutorProfile";
import MarkAttendance from "./LandingPages/Tutor/MarkAttendance";
import AllAttendance from "./LandingPages/Tutor/StudentAttendance";
import AttendanceHistory from "./LandingPages/Tutor/AttendanceHistory";
import AddStudent from "./LandingPages/Tutor/AddStudent"
import DeleteStudent from "./LandingPages/Tutor/DeleteStudent";
import AddCenter from "./LandingPages/Admin/AddCenter";
import DeleteCenter from "./LandingPages/Admin/DeleteCenter"; 
import AddTutor from "./LandingPages/Admin/AddTutor";
import DeleteTutor from "./LandingPages/Admin/DeleteTutor";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login-tutor" element={<LoginTutor />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/mark-attendance" element={<MarkAttendance />} />
        <Route path="/all-attendance" element={<AllAttendance/>} />
        <Route path="/attendance-history" element={<AttendanceHistory />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path='/add-center' element={<AddCenter />} />
        <Route path='/delete-center' element={<DeleteCenter />} />
        <Route path='/add-tutor' element={<AddTutor/>} />
        <Route path='/delete-tutor' element={<DeleteTutor/>} />
        <Route path="/add-student" element={<AddStudent/>}/>
        <Route path="/delete-student" element={<DeleteStudent/>}/>
        <Route path="/tutor-dashboard" element={<TutorDashboard />}></Route>
        <Route path="/centers" element={<Centers />}></Route>
        <Route path="/tutors" element={<Tutor />} />
        <Route path="/students" element={<Students />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/tutor-profile" element={<TutorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
