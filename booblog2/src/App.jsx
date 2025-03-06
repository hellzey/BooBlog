import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pantallas/Home';
import Dash from './pantallas/Dashboard';
import Login from './pantallas/Login';
import Registrer from './pantallas/Registrer';
import Chats from './pantallas/Chats';
import Perfil from './pantallas/Perfil';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrer" element={<Registrer />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App
