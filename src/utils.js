const validate = (userData)=>{
        
    let errors = {};

    if (!userData.name_claimant) {
      errors.name_claimant = 'Completar Campo!';
    }
    
    return errors;
  };

  export default validate;