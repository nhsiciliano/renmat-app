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
    <html lang="es">
      <head>
        <title>RegArMAT | Registro Argentino de Microangiopatias Tromboticas</title>
        <meta name="description" content="Sitio web abierto a la comunidad médica y científica para el registro de pacientes en la República Argentina con Microangiopatías Trombóticas" />
        <meta name="keywords" content="Microangiopatías Trombóticas, MAT, Argentina, registro, medicina, ciencia, PTT, SUHa, REDCap" />
        <link rel="canonical" href="https://www.regarmat.com.ar/" />
        <meta property="og:title" content="RegArMAT | Registro Argentino de Microangiopatias Tromboticas" />
        <meta property="og:description" content="Sitio web abierto a la comunidad médica y científica para el registro de pacientes en la República Argentina con Microangiopatías Trombóticas" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.regarmat.com.ar/" />
        <meta property="og:image" content="https://www.regarmat.com.ar/public/resmat.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RegArMAT | Registro Argentino de Microangiopatias Tromboticas" />
        <meta name="twitter:description" content="Sitio web abierto a la comunidad médica y científica para el registro de pacientes en la República Argentina con Microangiopatías Trombóticas" />
        <meta name="twitter:image" content="https://www.regarmat.com.ar/public/resmat.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div>
            <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
