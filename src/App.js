import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Reservations from './pages/Reservations';
import Feedback from './pages/Feedback';
import AboutUs from './pages/AboutUs';
import ThemeSwitcher from './components/ThemeSwitcher';
import Login from './pages/Login';
import './App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Admin state for login

  const handleLogout = () => {
    setIsAdmin(false); // Reset admin state
    alert('You have been logged out!');
  };

  return (
    <Router>
      <Navbar isAdmin={isAdmin} handleLogout={handleLogout} />
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu isAdmin={isAdmin} />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
}

export default App;
