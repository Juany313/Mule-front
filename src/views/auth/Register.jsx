import React, {useState} from 'react';
import { Link } from 'react-router-dom';

/* icons */
import { RiMailLine , RiLock2Line, RiUserLine  } from "react-icons/ri";
import { LuEye, LuEyeOff  } from "react-icons/lu";
const Register = () => {

  const [showPassword, SetShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
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
  
    
    /* const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(postDriver(driverData));
      alert("CONDUCTOR CREADO CON EXITO!!")
     
    }; */



  return (
    <div className='bg-secondary-100 p-8 rounded-xl w-auto  lg:w-[450px]'>
      <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
        Crear  <span className='text-primary'>cuenta</span>
      </h1>
      <form className='mb-8  text-white' >
        <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8
        text-gray-100'>
          <img src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png'
          className='w-4 h-4'/> 
          Registrate con google
        </button>
        <div className='relative mb-4'>
        <RiUserLine  className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="text"
            name="name" 
            value={userData.name} 
            onChange={handleChange}
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Nombre/s'
          />
        </div>
        
        <div className='relative mb-4'>
        <RiUserLine  className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="text"
            name="lastName" 
            value={userData.lastName} 
            onChange={handleChange}
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Apellidos'
          />
        </div>
        <div className='relative mb-4'>
          <RiUserLine  className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="text"
            name="Cedula" 
            value={userData.Cedula} 
            onChange={handleChange}
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='DNI'
          />
        </div>
        <div className='relative mb-4'>
          <RiMailLine  className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="email"
            name="email" 
            value={userData.email} 
            onChange={handleChange}
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Correo electrónico'
          />
        </div>
        <div className='relative mb-4'>
          <RiMailLine  className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="text"
            name="domicilio" 
            value={userData.domicilio} 
            onChange={handleChange}
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Domicilio'
          />
        </div>
        <div className='relative mb-4'>
          <RiMailLine  className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="text"
            name="telefono" 
            value={userData.telefono} 
            onChange={handleChange}
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='teléfono'
          />
        </div>
        <div className='relative mb-4'>
          <RiLock2Line  className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input 
              type={showPassword? 'text' : 'password'}
              name="password" 
              value={userData.password} 
              onChange={handleChange}
              className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
              placeholder='Contraseña'
            />
            {showPassword
            ?(<LuEye onClick={()=> SetShowPassword(!showPassword)} 
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'/>)
            :(<LuEyeOff onClick={()=> SetShowPassword(!showPassword)} 
                className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'/>) 
                }
          
        </div>
        <div className='relative mb-8'>
          <RiLock2Line  className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input 
              type={showPassword? 'text' : 'password'}
              name="password" 
              value={userData.password} 
              onChange={handleChange}
              className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
              placeholder='Confirmar contraseña'
            />
            {showPassword
            ?(<LuEye onClick={()=> SetShowPassword(!showPassword)} 
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'/>)
            :(<LuEyeOff onClick={()=> SetShowPassword(!showPassword)} 
                className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'/>) 
                }
          
        </div>
        <div>
          <button type='submit'className='bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors'>
            Registrarme
          </button>
        </div>
      </form>
      
        <span className='flex justify-center gap-2'>
          ¿Ya tienes cuenta?
          <Link to ='/auth/' className='text-primary hover:text-gray-100 transition-colors '>
            Ingresa
          </Link>
        </span>
      
    </div>
  )
}

export default Register