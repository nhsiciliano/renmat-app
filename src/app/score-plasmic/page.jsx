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
            <div className='m-auto flex min-h-[300px] w-full max-w-[800px] rounded-md bg-blue-200 p-6'>
                <h2 className='m-auto flex items-center text-center text-3xl font-bold'>PRÓXIMAMENTE INFORMACIÓN ÚTIL</h2>
            </div>
        </div>
    )
}

export default page
