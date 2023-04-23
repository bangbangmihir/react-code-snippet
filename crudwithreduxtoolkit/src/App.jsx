import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import User from './pages/User';
import Adduser from './pages/Adduser';
import EditUser from './pages/EditUser';





function App() {
  
  return (
    <>
       <Router>
        <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/user" element={<Adduser/>}/>
        <Route path="/edituser/:id" element={<EditUser/>}/>


        </Routes>


       </Router>
    </>
  )
}

export default App
