import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { Inter, EB_Garamond } from 'next/font/google'
import './globals.css'

const inter = EB_Garamond({ subsets: ['latin'] })

export const metadata = {
  title: 'RENMAT | Registro Nacional Microangiopatias Tromboticas',
  description: 'Sitio web abierto a la comunidad medica y cientifica para el registro de pacientes en la República Argentina con Microangiopatias Tromboticas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <div className='container'>
            <div>
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </div>
        </body>
    </html>
  )
}
