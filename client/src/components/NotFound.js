import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default NotFound;