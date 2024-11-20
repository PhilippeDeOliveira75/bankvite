import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/user';

export const signup = (userData) => {
  return axios.post(`${BASE_URL}/signup`, userData);
}

export const login = (userData) => {
  return axios.post(`${BASE_URL}/login`, userData);
}

export const getProfile = async (token) => {
  
  const test = await axios.post(`${BASE_URL}/profile`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return test.data.body
}

export const updateProfile = (token, userData) => {
  return axios.put(`${BASE_URL}/profile`, userData, {
    headers: { Authorization: `Bearer ${token}` }
  });
}