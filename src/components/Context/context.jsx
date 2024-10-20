import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { API_URL } from '../../helpers/Urls';
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL.login}`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      
      return true;
    } catch (error) {
      console.error('Error during login:', error.response?.data?.message || error.message);
      setIsAuthenticated(false);
      return false;
    }
  };
  const checkAuth = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(`${API_URL.checkAuth}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      setIsAuthenticated(response.status === 200);
    } catch (error) {
      console.error('Token verification failed:', error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };
  // Cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
