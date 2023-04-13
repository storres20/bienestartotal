import React from 'react'

export default function about() {
  return (
    <div className='flex justify-center'>
      <div className='border rounded-3xl w-5/6 bg-white bg-opacity-75 p-8 mb-8 md:w-3/4 md:text-2xl lg:w-1/2'>
        <div className='flex flex-col flex-wrap gap-10 text-center md:flex-row md:justify-center md:gap-20'>
          <div>
            <p className='underline decoration-pink-500 font-bold'>GALERIA EL BOSQUE</p>
            <p>JR. DUNKER LAVALLE 204</p>
            <p>2DO PISO (Cortina Verde)</p>
            <p>Referencia: Mariscal Castilla</p>
          </div>
          <div>
            <p className='underline decoration-pink-500 font-bold'>LUNES A DOMINGO</p>
            <p>8:00 AM - 11:00 AM</p>
            <p>5:00 PM - 8:00 PM</p>
          </div>
        </div>
        <p className='flex flex-col justify-center flex-wrap text-center pt-6 md:flex-row md:pt-10 md:gap-4'>
          <b>LUZMILA MONTALVO</b>
          <span>986 964 504</span>
        </p>
      </div>
    </div>
  )
}
