//Validación para formulario de creación EnlistmentForm

export const validateEnlistment = (input) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]+$/
    const celPhoneRegex = /^\d{10}$/
    const addressRegex = /^[a-zA-Z0-9,.\-#\s]+$/
    const weightRegex = /^\d+$/
    const valueRegex = /^\d+$/


    //name_claimant
    if (input.name_claimant && !nameRegex.test(input.name_claimant)) {
        errors.name_claimant = 'No se permiten caracteres especiales'
    }
    if (input.name_claimant.length > 0 && input.name_claimant.length < 3 || input.name_claimant.length > 30) {
        errors.name_claimant = 'Debe tener entre 3 y 30 caracteres'
    }

    //cedula_claimant
    if (input && input.cedula_claimant && input.cedula_claimant.length !== 8) {
        errors.cedula_claimant = 'El campo debe tener 8 digitos'
    }

    //cellphone_claimant
    if (input.cellphone_claimant && !celPhoneRegex.test(input.cellphone_claimant)) {
        errors.cellphone_claimant = 'El campo sólo puede tener 10 digitos'
    }

    //name_transmiter
    if (input.name_transmiter && !nameRegex.test(input.name_transmiter)) {
        errors.name_transmiter = 'No se permiten caracteres especiales'
    }
    if (input.name_transmiter && (input.name_transmiter.length > 0 && (input.name_transmiter.length < 3 || input.name_transmiter.length > 30))) {
        errors.name_transmiter = 'Debe tener entre 3 y 30 caracteres';
    }

    //surname_transmiter
    if (input.surname_transmiter && !nameRegex.test(input.surname_transmiter)) {
        errors.surname_transmiter = 'No se permiten caracteres especiales'
    }
    if (input.surname_transmiter && input.surname_transmiter.length < 3 ||input.surname_transmiter &&  input.surname_transmiter.length > 30) {
        errors.surname_transmiter = 'Debe tener entre 3 y 30 caracteres'
    }

    //celphone_transmiter
    if (input.celphone_transmiter && !celPhoneRegex.test(input.celphone_transmiter)) {
        errors.celphone_transmiter = 'El campo sólo puede tener 10 digitos'
    }

    //address_transmiter
    if (input.address_transmiter && !addressRegex.test(input.address_transmiter)) {
        errors.address_transmiter = 'No se aceptan caracteres especiales'
    }
    if (input.address_transmiter&& input.address_transmiter.length < 5 || input.address_transmiter&&input.address_transmiter.length > 35) {
        errors.address_transmiter = 'Debe tener entre 5 y 35 caracteres'
    }

    //name_receiver
    if (input.name_receiver && !nameRegex.test(input.name_receiver)) {
        errors.name_receiver = 'No se permiten caracteres especiales'
    }
    if (input.name_receiver && input.name_receiver.length < 3 ||input.name_receiver && input.name_receiver.length > 30) {
        errors.name_receiver = 'Debe tener entre 3 y 30 caracteres'
    }

    //celphone_receiver
    if (input.cellphone_receiver && !celPhoneRegex.test(input.cellphone_receiver)) {
        errors.cellphone_receiver = 'El campo sólo puede tener 10 digitos'
    }

    //address_receiver
    if (input.address_receiver && !addressRegex.test(input.address_receiver)) {
        errors.address_receiver = 'No se aceptan caracteres especiales'
    }
    if (input.address_receiver && input.address_receiver.length < 5 || input.address_receiver && input.address_receiver.length > 35) {
        errors.address_receiver = 'Debe tener entre 5 y 35 caracteres'
    }

    //weight
    if (input.weight !== undefined) {
        if (input.weight === '' || input.weight.toString().length > 3) {
            errors.weight = 'Peso máximo de 3 dígitos';
        }
        if (!weightRegex.test(input.weight.toString())) {
            errors.weight = 'Sólo se permiten números enteros';
        }
    }

    //declared_value
    if (input.declared_value && !valueRegex.test(input.declared_value)) {
        errors.declared_value = 'Sólo se permiten números enteros';
    }

    return errors
};