const validateDrivers = (driverData) => {
    let errors = {};
  
    // Validación de campos requeridos
    if (!driverData.name) {
      errors.name = "Completar Campo!";
    } 
  
    if (!driverData.email) {
      errors.email = "Completar Campo!";
    } else {
      // Validación de formato de correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(driverData.email)) {
        errors.email = "Formato de correo electrónico no válido";
      }
    }
  
    
  
      
      
  
    return errors;
  };
  
  export default validateDrivers;
  