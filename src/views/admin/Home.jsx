import React from 'react'

const Home = () => {
  return (
    <div className='min-h-[500px] max-h-[90vh] bg-red-400 flex items-center'>
      {/* <img className='max-h-[90vh] object-cover' src='https://s3-alpha-sig.figma.com/img/88cf/36a6/3f4f6b49050c73ca469d578f76d260dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fr9-z9hxUa2HuG~Ew-7AMtSgo1XNHaVWRF1KuzRer3dDq40WnWzjKKU9m689mGM6VBpy7zVVhs2EjZT~Mb~~625MfOMvUBaXswJhH5kDLzVUGQR1Tof87zNQ5m9Rjrav-Tdoe5rMOqpatM2Dz3weDi2RrHi9umPfg7kyLvL1JbDaSIbgRja1aL3rALUiRuchfc~OLqyTl4hqWm~xTRN386s4MAxgf4PkK0CR4sSdmbrrCw3zUfG~2AV940nWT4sPKclsiYausFgVtTx5bHCo4iMCCx5gUPsm3dlqUwoSncUDWGix9P6rQYKhwWIdu6t9VqnEMokdYAVQ366JixyiVg__'/> */}
      
      <div className='bg-blue-400 '>
        <h1>SEGUIMIENTO DE TU ENVÍO</h1>
        <div className='bg-slate-500 flex justify-center w-[400px] p-2 rounded-md'>
          <input type="text" 
          className='flex-1 pl-4 py-2 rounded-l-md bg-slate-500'
          placeholder='Número de seguimiento'
          />
          <button className='bg-primary rounded-md px-4 py-2'>Buscar</button>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Home