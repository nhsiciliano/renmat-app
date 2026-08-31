import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full bg-red-800 p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-red-800 text-center md:justify-between">
                <Image
                    src='/logoregarmat.png'
                    alt="RegArMAT, Registro Argentino de Microangiopatías Trombóticas"
                    width={400}
                    height={138}
                    className="h-auto w-full max-w-[400px] rounded-lg"
                />
                <nav aria-label='Enlaces del pie de página'>
                    <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
                        <li><Link href='/bibliografia' className="inline-flex min-h-11 items-center text-xl font-normal text-white underline-offset-4 transition-colors hover:text-blue-200 hover:underline">Bibliografía</Link></li>
                        <li><Link href='/score-plasmic' className="inline-flex min-h-11 items-center text-xl font-normal text-white underline-offset-4 transition-colors hover:text-blue-200 hover:underline">Score Plasmic</Link></li>
                        <li><Link href='/videos' className="inline-flex min-h-11 items-center text-xl font-normal text-white underline-offset-4 transition-colors hover:text-blue-200 hover:underline">Videos</Link></li>
                        <li><Link href='/contacto' className="inline-flex min-h-11 items-center text-xl font-normal text-white underline-offset-4 transition-colors hover:text-blue-200 hover:underline">Contacto</Link></li>
                    </ul>
                </nav>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <p className='text-center text-white text-2xl'>
                Ante cualquier duda, comunicate con nosotros por correo electrónico:
                <br />
                <a className='inline-flex min-h-11 items-center font-bold underline underline-offset-4 hover:text-blue-200' href='mailto:registroargmat@gmail.com'>
                    registroargmat@gmail.com
                </a>
            </p>
            <p className="mt-4 text-center font-normal text-white">
                &copy; {currentYear} RegArMAT | Registro Argentino de Microangiopatías Trombóticas
            </p>
        </footer>
    )
}

export default Footer
