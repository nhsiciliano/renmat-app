import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
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
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Link href='/bibliografia' legacyBehavior>
                            <a
                                className="font-normal text-white text-xl transition-colors hover:text-blue-300 focus:text-blue-200"
                            >
                                Bibliografía
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href='/score-plasmic' legacyBehavior>
                            <a
                                className="font-normal text-white text-xl transition-colors hover:text-blue-300 focus:text-blue-200"
                            >
                                Score Plasmic
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href='/videos' legacyBehavior>
                            <a
                                className="font-normal text-white text-xl transition-colors hover:text-blue-300 focus:text-blue-200"
                            >
                                Videos
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href='/contacto' legacyBehavior>
                            <a
                                className="font-normal text-white text-xl transition-colors hover:text-blue-300 focus:text-blue-200"
                            >
                                Contacto
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <p className='text-center text-white text-2xl'>
                Ante cualquier duda comunicate con nosotros a nuestro email de contacto:
                <br />
                <span className='font-bold'>registroargmat@gmail.com</span>
            </p>
            <br />
            <p className="text-center text-white font-normal">
                &copy; 2024 RegArMAT | Registro Argentino de Microangiopatías Trombóticas
            </p>
        </footer>
    )
}

export default Footer
