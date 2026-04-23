import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/bibliografia", label: "Bibliografía" },
  { href: "/score-plasmic", label: "Score Plasmic" },
  { href: "/videos", label: "Videos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-red-800 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-red-800 text-center md:justify-between">
        <Image
          src="/logoregarmat.png"
          alt="Logo RegArMAT"
          width={400}
          height={200}
          className="rounded-lg"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {footerLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-normal text-white text-xl transition-colors hover:text-blue-300 focus:text-blue-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <h2 className="text-center text-white text-2xl">
        Ante cualquier duda comunicate con nosotros a nuestro email de contacto:
        <br />
        <span className="font-bold">registroargmat@gmail.com</span>
      </h2>
      <br />
      <h2 className="text-center text-white font-normal">
        &copy; 2024 RegArMAT | Registro Argentino de Microangiopatías
        Trombóticas
      </h2>
    </footer>
  );
}
