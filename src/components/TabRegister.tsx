"use client";

import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  {
    label: "Quiero registrarme",
    value: "registro",
    desc: "Para poder registrarte hacé click en el botón debajo y accedé a las condiciones de registro y al formulario correspondiente.",
    button: "Quiero Registrarme",
    link: "/condiciones",
    external: false,
  },
  {
    label: "Ya estoy registrado",
    value: "registrado",
    desc: "Si ya estás registrado y tenés usuario y contraseña de acceso a REDCap, ingresá directamente desde el botón.",
    button: "Acceso REDCap",
    link: "https://redcap.anm.edu.ar/redcap/",
    external: true,
  },
];

export default function TabRegister() {
  return (
    <section className="bg-slate-50/60 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Ingreso
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Acceso al registro
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Elegí la opción que corresponda a tu situación.
          </p>
        </div>

        <Tabs defaultValue="registro">
          <TabsList className="grid h-11 w-full max-w-md grid-cols-2 bg-white p-1">
            {data.map(({ label, value }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="rounded-md text-sm font-medium text-slate-600 data-[state=active]:bg-slate-900 data-[state=active]:text-white"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {data.map(({ value, desc, button, link, external }) => (
            <TabsContent
              key={value}
              value={value}
              className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10"
            >
              <p className="max-w-2xl text-lg leading-relaxed text-slate-700">
                {desc}
              </p>
              <div className="mt-8">
                {external ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="h-11 rounded-full bg-slate-900 px-6 text-base font-medium text-white hover:bg-slate-800"
                    >
                      {button}
                      <ExternalLinkIcon className="ml-1.5 size-4" />
                    </Button>
                  </a>
                ) : (
                  <Link href={link}>
                    <Button
                      size="lg"
                      className="h-11 rounded-full bg-brand px-6 text-base font-medium text-white hover:bg-brand/90"
                    >
                      {button}
                      <ArrowRightIcon className="ml-1.5 size-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
