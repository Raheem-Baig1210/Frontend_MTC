// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
// import ReactDom from "react-dom"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './login'
import TutorDashboard from './LandingPages/Tutor/TutorDashboard';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/tutor-dashboard' element={<TutorDashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
