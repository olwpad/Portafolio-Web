// src/Dashboard/Dashboard.js
import { useAuth } from '../components/Context/context';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('get');

  const closeSession = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    // Aquí puedes agregar lógica para navegar a la sección correspondiente
  };

  return (
    <div className="flex h-screen">
      {/* Menú lateral */}
      <nav className="w-1/4 bg-gray-200 h-full p-4">
        <h2 className="text-xl font-semibold mb-4">Menú</h2>
        <ul>
          <li>
            <button
              className={`block w-full text-left py-2 ${activeSection === 'get' ? 'bg-gray-300' : ''}`}
              onClick={() => handleSectionChange('get')}
            >
              Obtener Datos
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-left py-2 ${activeSection === 'post' ? 'bg-gray-300' : ''}`}
              onClick={() => handleSectionChange('post')}
            >
              Insertar Datos
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-left py-2 ${activeSection === 'delete' ? 'bg-gray-300' : ''}`}
              onClick={() => handleSectionChange('delete')}
            >
              Eliminar Datos
            </button>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        {/* Aquí puedes renderizar el contenido según la sección activa */}
        {activeSection === 'get' && <div>Contenido para Obtener Datos</div>}
        {activeSection === 'post' && <div>Contenido para Insertar Datos</div>}
        {activeSection === 'delete' && <div>Contenido para Eliminar Datos</div>}
        
        {/* Botón para cerrar sesión */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={closeSession}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
