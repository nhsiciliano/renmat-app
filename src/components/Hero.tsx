import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="my-auto">
        <h2 className="text-[40px] md:text-[60px] text-red-800 font-bold pl-3 text-center lg:text-left md:pl-6">
          Bienvenidos
        </h2>
        <h2 className="text-[28px] text-gray-700 px-3 text-center lg:text-left md:px-6 mt-2">
          Le damos la bienvenida al sitio de{" "}
          <span className="bg-blue-200 text-red-800">
            Registro Argentino de Microangiopatías trombóticas
          </span>
          .
        </h2>
        <h2 className="text-[20px] text-gray-800 px-3 md:px-6 mt-5 mb-3">
          Se ha creado este espacio abierto a la comunidad de profesionales que
          diagnostican, estudian , tratan y realizan el seguimiento de pacientes
          padeciendo estas enfermedades.
        </h2>
      </div>
      <div>
        <Image
          src="/splashone.png"
          alt="hero image"
          width={650}
          height={500}
          className="object-cover rounded-lg m-auto mt-3 lg:mt-5"
        />
      </div>
    </div>
  );
}
