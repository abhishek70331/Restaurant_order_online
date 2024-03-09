import React from 'react'
// import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signup';
import Login from './pages/login';

// import YourComponentUsingRoutes from './YourComponentUsingRoutes';


function App() {
  return (
    <>
      { <Navbar /> }
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />

        </Routes>
      </Router>  
    </>
  );
}

export default App;
