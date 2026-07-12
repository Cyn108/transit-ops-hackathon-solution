import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Vehicles from './pages/Vehicles';
import Drivers from './pages/Drivers';
import Trips from './pages/Trips';
import Maintenance from './pages/Maintenance';
import Expenses from './pages/Expenses';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-primary text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/trips" element={<Trips />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
