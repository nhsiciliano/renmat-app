import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Sofia_Sans } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '../components/material-tailwind';


const inter = Sofia_Sans({
  subsets: ['latin']
})

export const metadata = {
  title: 'RegArMAT | Registro Argentino de Microangiopatias Tromboticas',
  description: 'Sitio web abierto a la comunidad medica y cientifica para el registro de pacientes en la República Argentina con Microangiopatias Tromboticas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
