"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  {
    label: "Quiero Registrarme",
    value: "registro",
    desc: `Para poder registrarte debes hacer click en el botón aquí abajo y accederás a las condiciones de registro y el formulario correspondiente.`,
    button: "Quiero Registrarme",
    link: "/condiciones",
    external: false,
  },
  {
    label: "Ya estoy registrado",
    value: "registrado",
    desc: `En caso que ya estés registrado y tengas tu usuario y contraseña de acceso a RedCAP haz click en el botón aquí abajo.`,
    button: "Acceso RedCAP",
    link: "https://redcap.anm.edu.ar/redcap/",
    external: true,
  },
];

export default function TabRegister() {
  return (
    <div className="p-3">
      <Tabs
        defaultValue="registro"
        className="p-5 rounded-lg border-2 border-solid border-gray-400"
      >
        <TabsList className="w-full bg-transparent gap-2">
          {data.map(({ label, value }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex-1 p-2 text-lg font-bold lg:text-xl"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {data.map(({ value, desc, button, link, external }) => (
          <TabsContent key={value} value={value} className="p-5 lg:p-8">
            <div className="text-center text-lg lg:text-xl text-red-800 font-semibold">
              {desc}
            </div>
            <div className="mt-[30px] flex items-center justify-center">
              {external ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white hover:from-indigo-700 hover:to-indigo-500"
                  >
                    {button}
                  </Button>
                </a>
              ) : (
                <Link href={link}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white hover:from-indigo-700 hover:to-indigo-500"
                  >
                    {button}
                  </Button>
                </Link>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
