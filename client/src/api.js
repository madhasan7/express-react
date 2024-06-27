import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const register = async (username, password, role, token) => {
  return axios.post(`${API_URL}/auth/register`, { username, password, role }, {
    headers: {
      Authorization: `Bearer ${token}` // Sertakan token dalam header
    }
  });
};

export const login = async (username, password) => {
  return axios.post(`${API_URL}/auth/login`, { username, password });
};

export const logout = async (token) => {
  return axios.post(`${API_URL}/auth/logout`, {}, {
    headers: {
      Authorization: `Bearer ${token}` // Sertakan token dalam header
    }
  });
};

export const getMe = async (token) => {
  return axios.get(`${API_URL}/user/me`, {
    headers: {
      Authorization: `Bearer ${token}` // Sertakan token dalam header
    }
  });
};

export const getMe2 = (token) => {
  return axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
