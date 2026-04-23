"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type StepperContextValue = {
  activeStep: number;
  onStepClick: (step: number) => void;
  totalSteps: number;
};

const StepperContext = React.createContext<StepperContextValue | null>(null);

function useStepper() {
  const ctx = React.useContext(StepperContext);
  if (!ctx) throw new Error("Stepper subcomponents must render inside <Stepper>");
  return ctx;
}

type StepperProps = {
  activeStep: number;
  onStepChange: (step: number) => void;
  children: React.ReactNode;
  className?: string;
};

function Stepper({ activeStep, onStepChange, children, className }: StepperProps) {
  const steps = React.Children.toArray(children);

  return (
    <StepperContext.Provider
      value={{
        activeStep,
        onStepClick: onStepChange,
        totalSteps: steps.length,
      }}
    >
      <div className={cn("flex w-full items-center", className)}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {React.isValidElement(step)
              ? React.cloneElement(step as React.ReactElement<StepProps>, { index })
              : step}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "mx-2 h-0.5 flex-1 transition-colors",
                  index < activeStep ? "bg-red-800" : "bg-gray-300"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </StepperContext.Provider>
  );
}

type StepProps = {
  index?: number;
  children?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  onClick?: () => void;
};

function Step({ index = 0, children, label, description, onClick }: StepProps) {
  const { activeStep, onStepClick } = useStepper();
  const isActive = activeStep === index;
  const isCompleted = activeStep > index;

  const handleClick = () => {
    onClick?.();
    onStepClick(index);
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "flex size-10 items-center justify-center rounded-full border-2 transition-colors",
          isActive || isCompleted
            ? "border-red-800 bg-red-800 text-white"
            : "border-gray-300 bg-white text-gray-500"
        )}
        aria-current={isActive ? "step" : undefined}
      >
        {children ?? index + 1}
      </button>
      {(label || description) && (
        <div className="absolute top-12 w-max text-center">
          {label && (
            <div
              className={cn(
                "text-sm font-semibold",
                isActive ? "text-blue-gray-900" : "text-gray-500"
              )}
            >
              {label}
            </div>
          )}
          {description && (
            <div
              className={cn(
                "text-xs font-normal",
                isActive ? "text-blue-gray-700" : "text-gray-500"
              )}
            >
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export { Stepper, Step };
