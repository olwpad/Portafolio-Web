import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/context';

function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  // Mientras se está verificando el estado de autenticación, muestra un spinner o indicador de carga
  if (loading) {
    return <div>Loading...</div>;  // Puedes personalizar este mensaje o usar un spinner
  }

  // Si el usuario está autenticado, muestra el componente privado
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
