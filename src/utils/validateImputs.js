const validateRegister = (userData) => {
  let errors = {};

  // Validación de campos requeridos
  if (!userData.name) {
    errors.name = "Completar Campo!";
  } else {
    const nameRegex = /^(?!\s)(?!.*\s$)[A-Za-z\s]{5,35}$/i;
    if (!nameRegex.test(userData.name)) {
      errors.name = "Nombre no válido ";
    }
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
    // Validación de contraseña: debe de ser al menos de 8 caracteres minimos o 12 carateres maximo, al menos un carácter especial un numero una letra mayúscula y una letra minuscula
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/

    if (!passwordRegex.test(userData.password)) {
      errors.password = "La contraseña debe tener al menos de 8 a 12 caracteres, un carácter especial un numero una letra mayúscula y una letra minúscula";
    }
  }

  return errors;
};

const validateLogin = (formData) => {
  let errors = {};

  if (!formData.email) {
    errors.email = "Completar Campo!";
  } else {
    // Validación de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Formato de correo electrónico no válido";
    }
  }

  // Validación de contraseña
  if (!formData.password) {
    errors.password = "Completar Campo!";
  } else {
    // Validación de contraseña: debe de ser al menos de 8 caracteres minimos o 12 carateres maximo, al menos un carácter especial un numero una letra mayúscula y una letra minuscula
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/;
    if (!passwordRegex.test(formData.password)) {
      errors.password = "La contraseña debe tener al menos de 8 a 12 caracteres, un carácter especial un numero una letra mayúscula y una letra minúscula";
    } 
  }

  return errors;
};



export {validateLogin, validateRegister};
