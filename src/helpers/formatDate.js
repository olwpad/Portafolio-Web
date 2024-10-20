// Función para formatear una fecha en cadena
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Función para convertir una cadena en formato YYYY-MM-DD a un objeto Date
  export const parseDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return new Date(year, month - 1, day); // Restar 1 al mes porque es 0-indexed
  };
  

  export const formatToDateInput = (dateString) => {
    return dateString ? dateString.split('T')[0] : ''; 
  };