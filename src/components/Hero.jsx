import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='my-auto'>
                <h1 className='text-[40px] md:text-[60px] text-red-800 font-bold pl-3 text-center lg:text-left md:pl-6'>Bienvenidos</h1>
                <p className='text-[28px] text-gray-700 px-3 text-center lg:text-left md:px-6 mt-2'>
                    Le damos la bienvenida al sitio de <span className='bg-blue-200 text-red-800'>Registro Argentino de Microangiopatías trombóticas</span>.
                </p>
                <p className='text-[20px] text-gray-800 px-3 md:px-6 mt-5 mb-3'>
                    Se ha creado este espacio abierto a la comunidad de profesionales que diagnostican, estudian
                    , tratan y realizan el seguimiento de pacientes padeciendo estas enfermedades.
                </p>
            </div>
            <div>
                <Image
                    src='/splashone.png'
                    alt='Identidad visual del Registro Argentino de Microangiopatías Trombóticas sobre una imagen de glóbulos rojos'
                    width={650}
                    height={500}
                    priority
                    className='object-cover rounded-lg m-auto mt-3 lg:mt-5'
                />
            </div>
        </div>
    )
}
