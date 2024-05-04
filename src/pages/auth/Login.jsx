import React, {useState} from 'react';
import { Link } from 'react-router-dom';

/* icons */
import { RiMailLine , RiLock2Line  } from "react-icons/ri";
import { LuEye, LuEyeOff  } from "react-icons/lu";



//! 2hs 02 minutos 43 segundos https://www.youtube.com/watch?v=m_0YupLc6Fo&list=PLVIqDRk3tnzwgIw2Rdz_yFlNhFAMJeGiT




const Login = () => {

  const [showPassword, SetShowPassword] = useState(false);

  return (
    <div className='bg-secondary-100 p-8 rounded-xl w-auto  lg:w-[450px]'>
      <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
        Iniciar  <span className='text-primary'>sesión</span>
      </h1>
      <form className='mb-8'>
        <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8
        text-gray-100'>
          <img src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png'
          className='w-4 h-4'/> 
          Ingresa con google
        </button>
        <div className='relative mb-4'>
        <RiMailLine  className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input 
            type="email"
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Correo electrónico'
          />
        </div>
        <div className='relative mb-8'>
          <RiLock2Line  className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input 
              type={showPassword? 'text' : 'password'}
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
        <div>
          <button type='submit'className='bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors'>
            Ingresar
          </button>
        </div>
      </form>
      <div className='flex flex-col flex-gap-4 items-center '>
        <Link to ='/auth/olvide-password' className='hover:text-primary transition-colors '>
          ¿Olvidaste tu contraseña?</Link>
        <span className='flex items-center gap-2'>
          ¿No tienes cuenta?
          <Link to ='/auth/registro' className='text-primary hover:text-gray-100 transition-colors '>
            Registrate
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Login;