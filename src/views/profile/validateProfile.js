const validateProfile = (input)=>{
    const errors = {};
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/u
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const celPhoneRegex = /^\d{10}$/
    const urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|svg)/;
    const ageRegex = /^(1[89]|[2-8][0-9]|90)$/



    //name
    if(input.name.length>1 && !nameRegex.test(input.name)){
        errors.name = 'No se permiten caracteres especiales'
    }

    //email
    if(input.email.length>1 && !emailRegex.test(input.email)){
        errors.email = 'No es un mail válido'
    }

    //DNI
    if(input.cedula.length>0 && input.cedula.length !== 8) {
        errors.cedula = 'El campo debe tener 8 digitos'
    }

    //teléfono
    if (input.cel_Phone_Number.length >0 && !celPhoneRegex.test(input.cel_Phone_Number)) {
        errors.cel_Phone_Number = 'El campo sólo puede tener 10 digitos'
    }

    //age
    if (input.age.length>0 && !ageRegex.test(input.age)) {
        errors.age = 'Debes ser mayor de 18 años'
    }

    // photo
    // if (!urlRegex.test(input.photo)) {
    //     errors.photo = 'Debes ingresar un archivo png'
    // }

    nickname
    if(input.nickname.length>1 && !nameRegex.test(input.nickname)){
        errors.nickname = 'No se permiten caracteres especiales'
    }
    return errors;
}

export default validateProfile