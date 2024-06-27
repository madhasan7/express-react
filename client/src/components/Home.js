import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;