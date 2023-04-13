import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head'

export default function Home() {
  return (
    <div className='flex justify-center font-bold'>
      <Head>
        <title>Bienestar Total</title>
      </Head>
    
      <div className='border rounded-3xl w-5/6 bg-white bg-opacity-75 px-2 py-4 mb-8 md:w-3/4 lg:2/3'  >
        <h1 className='font-mono text-center text-3xl uppercase underline decoration-pink-500 md:text-5xl'>Bienestar Total</h1>

        <div className='flex flex-col self-center gap-2 pt-10 md:text-2xl md:gap-4 md:items-center'>
          <p className='flex space-x-1 items-center md:space-x-4'>
            <AiOutlineCheckCircle color='green' size={20} />
            <span>Reduce el porcentaje de tu grasa abdominal</span>
          </p>
          <p className='flex space-x-1 items-center'>
            <AiOutlineCheckCircle color='green' size={20} />
            <span>Mejora tu energia, vitalidad y buena digestion</span>
          </p>
          <p className='flex space-x-1 items-center'>
            <AiOutlineCheckCircle color='green' size={20} />
            <span>Controla tu peso y aumenta tu masa muscular</span>
          </p>
          <p className='flex space-x-1 items-center'>
            <AiOutlineCheckCircle color='green' size={20} />
            <span>Complemento para deportistas</span>
          </p>
          <p className='flex space-x-1 items-center'>
            <AiOutlineCheckCircle color='green' size={20} />
            <span>Participa del reto de 10 dias</span>
          </p>
          <p className='flex space-x-1 items-center'>
            <AiOutlineCheckCircle color='green' size={20} />
            <span>Asesoria y plan de alimentacion</span>
          </p>
          <p className='flex space-x-1 items-center'>
            <AiOutlineCheckCircle color='green' size={20} />
            <span>La hora FIT: Ejercicios funcional, bailes y alto voltaje</span>
          </p>
        </div>
        
        {<div className='flex flex-col items-center'>
          <Image src='/te1v2.png' width={250} height={250} alt='te' className='md:hidden' />
          <Image src='/te1v2.png' width={400} height={400} alt='te2' className='hidden md:inline-flex' />
        </div>}
        
        <div className='flex flex-col flex-wrap items-center justify-center pt-4 md:flex-row md:text-2xl md:gap-2'>
          <p className='bg-yellow-500 text-white p-3 rounded-full'>GRATIS</p>
          <p>Informacion nutricional</p>
          <p>+</p>
          <p>Te energizante</p>
        </div>
      </div>
    </div>
  )
}
