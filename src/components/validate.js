function validate(userData) {
  const validateString = (str) => {
    // Expresión regular para verificar la primera letra mayúscula, longitud entre 2 y 35 caracteres
    const regex = /^[A-ZÁÉÍÓÚÜÑ][a-zA-ZÁÉÍÓÚÜÑ\s]{0,34}$/;
    // Verifica si la cadena coincide con la expresión regular y no contiene caracteres especiales
    return regex.test(str);
  };

  const errors = {};

  if (!validateString(userData.name_claimant))
    errors.name_claimant =
      "El nombre de la actividad debe ser una palabra entre 2 y 35 caracteres y mayúscula inicial";

  //   if (
  //     isNaN(dataForm.difficulty) ||
  //     dataForm.difficulty < 1 ||
  //     dataForm.difficulty > 5
  //   )
  //     errors.difficulty = "La dificultad debe ser un número entre 1 y 5 ";

  //   if (
  //     isNaN(dataForm.duration) ||
  //     dataForm.duration < 1 ||
  //     dataForm.duration > 24
  //   )
  //     errors.duration =
  //       "La duración debe ser un número entre 1 y 24 (representa horas) ";

  //   if (
  //     dataForm.season !== "Verano" &&
  //     dataForm.season !== "Primavera" &&
  //     dataForm.season !== "Otoño" &&
  //     dataForm.season !== "Invierno"
  //   )
  //     errors.season =
  //       'La temporada puede ser "Verano", "Primavera", "Otoño" o "Invierno" ';

  return errors;
}

export default validate;
