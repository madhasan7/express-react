import React, { useState, useEffect } from 'react';
import { getMe } from '../api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await getMe(token);
        setUser(response.data.user);
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };
    fetchData();
  }, []);

  const handleRegister = () => {
    navigate('/register');
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <p>Role: {user.role}</p>
      <p>Joined: {new Date(user.created_at).toLocaleDateString()}</p>
      <p>Last Updated: {new Date(user.updated_at).toLocaleDateString()}</p>
      {user.role === 'admin' && (
        <button onClick={handleRegister}>Register New User</button>
      )}
    </div>
  );
};

export default Dashboard;
