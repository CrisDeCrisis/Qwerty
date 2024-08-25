import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.jsx'; // Otro componente, puede ser el principal
import Register from './components/Register.jsx';  // Importa tu componente Register
import Login from './components/Login.jsx'; // Otro componente, puede ser el principal
import Home from './components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;