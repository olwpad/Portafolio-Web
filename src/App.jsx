import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portafolio from './Portafolio';
import Dashboard from './Dashboard/Dashboard';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import { AuthProvider } from './components/Context/context';
;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Ruta privada para el Dashboard */}
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
  
          {/* Cualquier otra ruta va a Portafolio */}
          <Route path="*" element={<Portafolio />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
