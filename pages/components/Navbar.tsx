import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <div className='flex space-x-4 pl-4 pt-2 pb-8'>
      <Link href='/' className='text-2xl rounded border border-black   p-2 bg-red-600 text-white hover:bg-gray-500'>Inicio</Link>
      <Link href='/about' className='text-2xl rounded border border-black p-2 bg-red-600 text-white hover:bg-gray-500'>Contacto</Link>
    </div>
  )
}
