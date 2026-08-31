import React from 'react'

const page = () => {
    return (
        <div className='bg-blue-50 px-10 py-5 lg:px-20 lg:py-10'>
            <h1 className='text-xl lg:text-2xl text-red-800 mx-5 my-3'>Links de interés</h1>
            <hr className='border-red-800 mx-5' />
            <div className='p-6 text-xl'>
                <p>Aquí podrás encontrar links a distintos sitios de interés con información
                    sobre MAT y algunas herramientas virtuales de uso científico.
                </p>
            </div>
            <div className='m-auto flex bg-blue-200 w-[300px] lg:w-[800px] h-[300px] rounded-md'>
                <h2 className='text-3xl flex items-center text-center m-auto font-bold'>PROXIMAMENTE INFORMACION UTIL</h2>
            </div>
        </div>
    )
}

export default page
