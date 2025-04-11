import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import Chat from './Components/Pages/Chats';
import Profile from './Components/Pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
