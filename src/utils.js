const validate = (userData) => {
  let errors = {};

  // Validación de campos requeridos
  if (!userData.name) {
    errors.name = "Completar Campo!";
  } 

  if (!userData.email) {
    errors.email = "Completar Campo!";
  } else {
    // Validación de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      errors.email = "Formato de correo electrónico no válido";
    }
  }

  // Validación de contraseña
  if (!userData.password) {
    errors.password = "Completar Campo!";
  } else {
    // Validación de contraseña: al menos 8 caracteres y al menos un carácter especial o mayúscula
    //!CORREGIR REGEX

    
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(userData.password)) {
      errors.password = "La contraseña debe tener al menos 8 caracteres, un carácter especial o mayúscula";
    } else {
      errors.password = ""; // Vacía el error cuando la contraseña cumple con la validación
    }
  }

  return errors;
};

export default validate;
