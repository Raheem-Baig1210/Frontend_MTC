// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
// import ReactDom from "react-dom"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './login'
import AdminDashboard from "./AdminDashboard"
import Centers from './Center';
import Attendance from './Attendace';
import Students from './students';
import Tutor from './tutors';
import TutorDashboard from './LandingPages/Tutor/TutorDashboard';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
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
