import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roles }) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null; // Periksa apakah data pengguna ada

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (roles && (!user || roles.indexOf(user.role) === -1)) {
    return <Navigate to="/dashboard" />; // Redirect jika peran tidak sesuai
  }

  return children;
};

export default PrivateRoute;
