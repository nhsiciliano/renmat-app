import React from 'react'

const page = () => {
    return (
        <div className='bg-blue-50 px-10 py-5 lg:px-20 lg:py-10'>
            <h1 className='text-xl lg:text-2xl text-red-800 mx-5 my-3'>Contacto</h1>
            <hr className='border-red-800 mx-5' />
            <br />
            <div className='p-6 text-xl'>
                <p>Ante cualquier duda con respecto al registro o al acceso al sistema REDCap
                    podés comunicarte con nosotros mediante los siguientes medios:
                </p>
                <address className='my-6 not-italic'>
                    <p>
                        Correo electrónico:{' '}
                        <a className='font-bold text-blue-900 underline underline-offset-4 hover:text-red-800' href='mailto:registroargmat@gmail.com'>
                            registroargmat@gmail.com
                        </a>
                    </p>
                    <p className='mt-3'>
                        Teléfonos:{' '}
                        <a className='font-bold text-blue-900 underline underline-offset-4 hover:text-red-800' href='tel:+541148091000'>4809-1000</a>
                        {' / '}
                        <a className='font-bold text-blue-900 underline underline-offset-4 hover:text-red-800' href='tel:+541148091022'>4809-1022</a>
                    </p>
                </address>
                <p>Recordá que, una vez completado el registro mediante nuestra plataforma,
                    nos pondremos en contacto por correo electrónico para enviar los datos de acceso al
                    sistema REDCap.
                </p>
            </div>
        </div>
    )
}

export default page
