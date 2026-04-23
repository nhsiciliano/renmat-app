import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "RegArMAT | Registro Argentino de Microangiopatias Tromboticas",
  description:
    "Sitio web abierto a la comunidad médica y científica para el registro de pacientes en la República Argentina con Microangiopatías Trombóticas",
  keywords: [
    "Microangiopatías Trombóticas",
    "MAT",
    "Argentina",
    "registro",
    "medicina",
    "ciencia",
    "PTT",
    "SUHa",
    "REDCap",
  ],
  alternates: {
    canonical: "https://www.regarmat.com.ar/",
  },
  openGraph: {
    title:
      "RegArMAT | Registro Argentino de Microangiopatias Tromboticas",
    description:
      "Sitio web abierto a la comunidad médica y científica para el registro de pacientes en la República Argentina con Microangiopatías Trombóticas",
    type: "website",
    url: "https://www.regarmat.com.ar/",
    images: ["https://www.regarmat.com.ar/public/resmat.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RegArMAT | Registro Argentino de Microangiopatias Tromboticas",
    description:
      "Sitio web abierto a la comunidad médica y científica para el registro de pacientes en la República Argentina con Microangiopatías Trombóticas",
    images: ["https://www.regarmat.com.ar/public/resmat.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={sofiaSans.className}>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
