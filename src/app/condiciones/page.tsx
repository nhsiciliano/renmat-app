"use client";

import { useState } from "react";
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
    <div className="bg-blue-50 px-10 py-5 lg:px-20 lg:py-10">
      <div className="py-4 px-4">
        <div className="px-4 mb-[120px] md:px-20 lg:px-60">
          <Stepper activeStep={activeStep} onStepChange={setActiveStep}>
            <Step label="Paso 1" description="Condiciones de Registro">
              <UserIcon className="h-5 w-5" />
            </Step>
            <Step label="Paso 2" description="Formulario de Registro">
              <IdentificationIcon className="h-5 w-5" />
            </Step>
          </Stepper>
        </div>
        <div>{stepElements[activeStep]}</div>
        <div className="mt-3 flex justify-center">
          {!isLastStep && (
            <Button
              type="button"
              onClick={handleNext}
              disabled={isLastStep}
              size="lg"
              className="bg-red-800 hover:bg-red-900 text-white text-sm lg:text-lg"
            >
              {isFirstStep
                ? "ACEPTO LAS CONDICIONES DE REGISTRO"
                : "SIGUIENTE"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
