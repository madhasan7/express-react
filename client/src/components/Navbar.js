import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../api';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {token ? (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          {/* <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink> */}
        </>
      )}
    </nav>
  );
};

export default Navbar;

