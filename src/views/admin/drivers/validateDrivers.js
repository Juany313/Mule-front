export const validateDrivers = (input) => {
  const errors = {};
  const nameRegex = /^[a-zA-Z\s]+$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const cbuRegex= /^\d{16,24}$/

  //name
  if (input.name && !nameRegex.test(input.name)) {
    errors.name = 'No se permiten caracteres especiales'
  }
  if (input.name.length > 0 && input.name.length < 5 || input.name.length > 35) {
    errors.name = 'Debe tener entre 5 y 35 caracteres'
  }
  //email
  if (input.email && !emailRegex.test(input.email)) {
    errors.email = "Formato de correo electrónico no válido";
  }

  //cbu
  if (input.debit && !cbuRegex.test(input.debit)) {
    errors.debit = "Formato de correo electrónico no válido";
  }

  return errors;
};
