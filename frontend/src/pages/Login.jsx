import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('role', response.data.role);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p className="text-gray-400">Sign in to your account</p>
        </div>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded outline-none"
              placeholder="admin@transportops.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded outline-none"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-400 text-sm">Remember me</span>
            </label>
            <a href="#" className="text-secondary text-sm">Forgot Password?</a>
          </div>
          <button type="submit" className="w-full bg-secondary p-2 rounded font-bold hover:bg-blue-600">
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-4">
          Don't have an account? <a href="#" className="text-secondary">Sign up</a>
        </p>
        <p className="text-center text-gray-500 text-xs mt-4">© 2025 TransportOps. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
