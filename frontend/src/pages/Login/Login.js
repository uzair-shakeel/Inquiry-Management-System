import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; // Update the import path as necessary
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const hardcodedEmail = 'vikramkumar2k3@gmail.com';
    const hardcodedPassword = 'vikramkumar';

    if (email === hardcodedEmail && password === hardcodedPassword) {
      login();
      navigate('/form'); // Navigate to the form page after login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center animate-fade-in-down">
      <div className="bg-white p-4 md:p-8 rounded-lg border shadow-lg w-full max-w-[600px] animate-scale-in">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <button
              type="submit"
              className='w-full bg-blue-500 text-white p-2 rounded-md transition duration-300 hover:bg-blue-600'
            >
              Login
            </button>
          </div>
          <p className="text-center text-sm text-gray-600">
            Don't have an account? <a href="/" className="text-blue-500">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
