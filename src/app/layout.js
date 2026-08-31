import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Sofia_Sans } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '../components/material-tailwind';


const inter = Sofia_Sans({
  subsets: ['latin']
})

export const metadata = {
  metadataBase: new URL('https://www.regarmat.com.ar'),
  title: 'RegArMAT | Registro Argentino de Microangiopatías Trombóticas',
  description: 'Sitio web abierto a la comunidad médica y científica para el registro de pacientes en la República Argentina con Microangiopatías Trombóticas.',
  keywords: [
    'Microangiopatías Trombóticas',
    'MAT',
    'Argentina',
    'registro',
    'medicina',
    'ciencia',
    'PTT',
    'SUHa',
    'REDCap',
  ],
  applicationName: 'RegArMAT',
  openGraph: {
    title: 'RegArMAT | Registro Argentino de Microangiopatías Trombóticas',
    description: 'Sitio web abierto a la comunidad médica y científica para el registro de pacientes en la República Argentina con Microangiopatías Trombóticas.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'RegArMAT',
    images: [
      {
        url: 'https://www.regarmat.com.ar/resmat.jpg',
        width: 1595,
        height: 901,
        alt: 'RegArMAT, Registro Argentino de Microangiopatías Trombóticas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RegArMAT | Registro Argentino de Microangiopatías Trombóticas',
    description: 'Sitio web abierto a la comunidad médica y científica para el registro de pacientes en la República Argentina con Microangiopatías Trombóticas.',
    images: ['https://www.regarmat.com.ar/resmat.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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
