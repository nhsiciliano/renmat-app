"use client";

import * as React from "react";
import { CheckIcon } from "lucide-react";

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
      <ol
        className={cn("flex w-full items-start", className)}
        aria-label="Progreso del registro"
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <li className="flex flex-1 flex-col items-start first:flex-none last:flex-none">
              {React.isValidElement(step)
                ? React.cloneElement(step as React.ReactElement<StepProps>, { index })
                : step}
            </li>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "mx-3 mt-4 h-px flex-1 transition-colors",
                  index < activeStep ? "bg-brand" : "bg-slate-200"
                )}
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </ol>
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
  const isDone = isCompleted;

  const handleClick = () => {
    onClick?.();
    onStepClick(index);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "flex size-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors",
          isActive &&
            "border-brand bg-brand text-white",
          isDone && "border-brand bg-white text-brand",
          !isActive && !isDone && "border-slate-300 bg-white text-slate-500"
        )}
        aria-current={isActive ? "step" : undefined}
      >
        {isDone ? <CheckIcon className="size-4" /> : children ?? index + 1}
      </button>
      {(label || description) && (
        <div className="min-w-[120px]">
          {label && (
            <div
              className={cn(
                "sci text-[11px] font-semibold uppercase tracking-wider",
                isActive || isDone ? "text-slate-900" : "text-slate-400"
              )}
            >
              {label}
            </div>
          )}
          {description && (
            <div
              className={cn(
                "mt-0.5 text-sm",
                isActive ? "text-slate-900" : "text-slate-500"
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
