import React from 'react'

const Service = () => {
  return (
    <>
    <div id='service' className='min-h-screen bg-p300 flex flex-col items-center justify-start pt-[7rem] text-white' >
      <h1 className='font-bold text-4xl mb-2'>
        NUESTROS SERVICIOS
      </h1>

      <div className='text-center font-semibold text-xl'>
        <hr className='border-t-4 border-s400 mt-4 mb-4 w-[95vw]' />
          <p >Estamos aquí para facilitar tus envíos</p>
          <p>Disponemos de diferentes soluciones logísticas diseñadas para cada necesidad.</p>
          <p>Sabemos que cada cliente tiene sus propias necesidades, por eso en Mule contamos con servicios con</p>
          <p>soluciones personalizadas, confiables y seguras, a través de nuestra amplia red en todo el país.</p>
        <hr className='border-t-4 border-s400 mt-4 mb-4 w-[95vw]' />
      </div>

      <div className='w-[80vw] h-[40vh] mt-8 p-8 flex justify-evenly'>
        <div className='h-full w-[250px] bg-white rounded-xl '>
          <div className='bg-red-300 h-[80%] rounded-t-xl'>IMAGEN</div>
          <div className=' w-full text-center text-3xl px-2 text-slate-600'><span>Puerta a Puerta</span></div>
        </div>
        <div className='h-full w-[250px] bg-white rounded-xl '>
          <div className='bg-red-300 h-[80%] rounded-t-xl'>IMAGEN</div>
          <div className=' w-full text-center text-3xl px-2 text-slate-600'><span>Sucursal a Puerta</span></div>
        </div>
        <div className='h-full w-[250px] bg-white rounded-xl '>
          <div className='bg-red-300 h-[80%] rounded-t-xl'>IMAGEN</div>
          <div className=' w-full text-center text-3xl px-2 text-slate-600'><span>Puerta a Sucursal</span></div>
        </div>
        <div className='h-full w-[250px] bg-white rounded-xl '>
          <div className='bg-red-300 h-[80%] rounded-t-xl'>IMAGEN</div>
          <div className=' w-full text-center text-3xl  text-slate-600'><span >Sucursal a Sucursal</span></div>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Service