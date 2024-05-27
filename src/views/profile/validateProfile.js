const validateProfile = (input)=>{
    const errors = {};
    const nameRegex = /^[A-Za-z0-9@\s,\-._()&!?']{1,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const celPhoneRegex = /^\d{0,10}$/
    // const urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|svg)/;
    const ageRegex = /^(1[89]|[2-8][0-9]|90)$/



    //name
    if(!nameRegex.test(input.name)){
        errors.name = 'No se permiten caracteres especiales'
    }

    //email
    if(!emailRegex.test(input.email)){
        errors.email = 'No es un mail válido'
    }

    //DNI
    if(input.cedula.length !== 8) {
        errors.cedula = 'El campo debe tener 8 digitos'
    }

    //teléfono
    if (!celPhoneRegex.test(input.cel_Phone_Number)) {
        errors.cel_Phone_Number = 'El campo sólo puede tener 10 digitos'
    }

    //age
    if (!ageRegex.test(input.age)) {
        errors.age = 'Edad no válida'
    }

    //photo
    // if (!urlRegex.test(input.photo)) {
    //     errors.photo = 'Debes ingresar un URL válida'
    // }

    return errors;
}

export default validateProfile