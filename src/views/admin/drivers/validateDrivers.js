export const validateDrivers = (input) => {
  const errors = {};
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cbuRegex = /^\d{16,24}$/;
  const antRegex = /^\d{0,10}$/;

  //name
  if (input.name && !nameRegex.test(input.name)) {
    errors.name = "No se permiten caracteres especiales";
  }
  if (
    (input.name.length > 0 && input.name.length < 5) ||
    input.name.length > 35
  ) {
    errors.name_claimant = "Debe tener entre 5 y 35 caracteres";
  }

  //antiquity

  if (input.antiquity && !antRegex.test(input.antiquity)) {
    errors.antiquity = "No se permiten letras o caracteres especiales";
  }

  //email
  if (input.email && !emailRegex.test(input.email)) {
    errors.email = "Formato de correo electrónico no válido";
  }

  //cbu
  if (input.debit && !cbuRegex.test(input.debit)) {
    errors.debit = "el número requerido debe ser entre 16 y 24 dígitos";
  }

  return errors;
};
