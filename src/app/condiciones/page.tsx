"use client";

import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import {
  IdentificationIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import Conditions from "@/components/Conditions";
import Form from "@/components/Form";
import { Button } from "@/components/ui/button";
import { Step, Stepper } from "@/components/ui/stepper";

export default function CondicionesPage() {
  const [activeStep, setActiveStep] = useState(0);

  const totalSteps = 2;
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === totalSteps - 1;

  const handleNext = () =>
    setActiveStep((current) => Math.min(current + 1, totalSteps - 1));

  const stepElements = [<Conditions key="first" />, <Form key="second" />];

  return (
    <div className="bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Onboarding
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Registrate como profesional
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            En dos pasos completás las condiciones de uso y los datos de
            contacto para recibir tus credenciales de REDCap.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 lg:px-8">
        <Stepper activeStep={activeStep} onStepChange={setActiveStep}>
          <Step label="Paso 1" description="Condiciones">
            <UserIcon className="h-4 w-4" />
          </Step>
          <Step label="Paso 2" description="Formulario">
            <IdentificationIcon className="h-4 w-4" />
          </Step>
        </Stepper>
      </div>

      <div>{stepElements[activeStep]}</div>

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        {!isLastStep && (
          <div className="flex justify-center border-t border-slate-200 pt-8">
            <Button
              type="button"
              onClick={handleNext}
              disabled={isLastStep}
              size="lg"
              className="h-11 rounded-full bg-brand px-6 text-base font-medium text-white hover:bg-brand/90"
            >
              {isFirstStep
                ? "Acepto las condiciones"
                : "Siguiente"}
              <ArrowRightIcon className="ml-1.5 size-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
