// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
// import ReactDom from "react-dom"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import HomePage from "./LandingPages/homepage/HomePage"
import LoginAdmin from './LandingPages/Admin/Admin_login'
import LoginTutor from "./LandingPages/Tutor/Tutor_login"
import AdminDashboard from "./LandingPages/Admin/AdminDashboard"
import AddTutor from "./LandingPages/Admin/AddTutor"
import RemoveTutor from "./LandingPages/Admin/DeleteTutor";
import AddCenter from "./LandingPages/Admin/AddCenter"
import RemoveCenter from "./LandingPages/Admin/DeleteCenter"
import Centers from './LandingPages/Admin/Center';
import Attendance from './LandingPages/Admin/Attendace';
import Students from './LandingPages/Admin/students';
import Tutor from './LandingPages/Admin/tutors';
import TutorDashboard from './LandingPages/Tutor/TutorDashboard';
// import HomePage from './LandingPages/homepage/HomePage';
import TutorProfile from './LandingPages/Admin/TutorProfile';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/login-tutor' element={<LoginTutor/>}/>
    <Route path='/login-admin' element={<LoginAdmin/>}/>
    <Route path='/tutor-profile' element={<TutorProfile/>}/>
    <Route path='/add-center' element={<AddCenter/>}/>
    <Route path='/remove-center' element={<RemoveCenter/>}/>


    <Route path='/add-tutor' element={<AddTutor/>}/>
    <Route path='/remove-tutor' element={<RemoveTutor/>}/>
    <Route path='/admin-dashboard' element={<AdminDashboard/>}></Route>
    <Route path='/tutor-dashboard' element={<TutorDashboard/>}></Route>
    <Route path='/centers' element={<Centers/>}></Route>
    <Route path='/tutors' element={<Tutor/>}/>
    <Route path='/students' element={<Students/>}/>
    <Route path='/attendance' element={<Attendance/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
