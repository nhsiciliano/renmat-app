import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import MotionProvider from '@/components/MotionProvider'
import { Sofia_Sans } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '../components/material-tailwind';


const inter = Sofia_Sans({
  subsets: ['latin']
})

const directionContract = `
DIRECTION CONTRACT
THESIS: RegArMAT se presenta como una red nacional de conocimiento clínico y rechaza la portada sanitaria genérica de fotografía de laboratorio y tarjetas.
OWN-WORLD: Atlas científico argentino: papel luminoso, topología territorial, nodos clínicos, azul marino, teal y rojo óxido.
STORY: La persona comprende el propósito, reconoce a la comunidad convocada y elige solicitar acceso o entrar a REDCap.
FIRST VIEWPORT: Navegación compacta; mensaje y acciones a la izquierda; figura territorial conceptual de escala equivalente a la derecha; registro como acción primaria visible.
FORM: Atlas científico territorial, dirección 3 de 7, seed 10d6f38f; interacción firma: la red se conecta una vez con movimiento sutil.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
`.trim()

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
        <script
          id="direction-contract-marker"
          dangerouslySetInnerHTML={{
            __html: `document.currentScript.insertAdjacentHTML('beforebegin', ${JSON.stringify(`<!--\n${directionContract}\n-->`)})`,
          }}
        />
        <MotionProvider>
          <ThemeProvider>
            <div className="site-shell">
              <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
              <Navbar />
              <main id="main-content" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </MotionProvider>
      </body>
    </html>
  )
}
