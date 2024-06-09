const validateCustomer = (input)=>{
    const errors = {};
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/u
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const celPhoneRegex = /^\d{10}$/
    const ageRegex = /^(1[89]|[2-8][0-9]|90)$/
    const passwordRegex = /(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/

    //name
    if(input.name && !nameRegex.test(input.name)){
        errors.name = 'No se permiten caracteres especiales'
    }

    //email
    if(input.email && !emailRegex.test(input.email)){
        errors.email = 'No es un mail válido'
    }

    //password
    if(input.email && !passwordRegex.test(input.password)){
        errors.password="La contraseña debe contener al menos una letra, un número y un carácter especial."
    }

    //DNI
    if(input.cedula && input.cedula.length !== 8) {
        errors.cedula = 'El campo debe tener 8 digitos'
    }

    //teléfono
    if (input.cel_Phone_Number && !celPhoneRegex.test(input.cel_Phone_Number)) {
        errors.cel_Phone_Number = 'El campo sólo puede tener 10 digitos'
    }


    //age
    if (input.age && !ageRegex.test(input.age)) {
        errors.age = 'Debes ser mayor de 18 años'
    }

    //nickname
    if(input.nickname && !nameRegex.test(input.nickname)){
        errors.nickname = 'No se permiten caracteres especiales'
    }
    return errors;
}

export default validateCustomer