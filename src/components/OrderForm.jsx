import React, {useState} from 'react';

const OrderForm = () => {

    
    const [userData, setUserData] = useState({
        name_claimant: '',
      lastName:'',
      Cedula:'',
      email:'',
      domicilio:'',
      telefono:'',
      password:''
  
    });
    const [errors, setErrors] = useState({
      name: '',
    });
  
    const handleChange = (event) => {
      const property = event.target.name;
      const value = event.target.value;
    
      setUserData({ ...userData, [property]: value });
    
      
      };


  return (
    <div className='min-h-screen bg-p300 flex items-center justify-center p-4'>
        <div className='bg-p100 p-8 rounded-xl w-auto  lg:w-[450px]'>

        <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>INICIA TU PEDIDO</h1>

        <form className='mb-8'>
        
        <div className='relative mb-4'>
        
          <input 
            type="text"
            name="name_claimant" 
            value={userData.name_claimant} 
            onChange={handleChange}
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Nombre/s'
          />
        </div>

        <div className='relative mb-4'>
            <input 
            type="email"
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Correo electrónico'
            />
        </div>
        
        <div>
            <button type='submit'className='bg-s300 text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors'>
            Ingresar
            </button>
        </div>
        </form>
        
   
  </div>
    </div>
    
  )
}

export default OrderForm