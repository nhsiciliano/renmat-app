"use client"

import React, { useState } from 'react'
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import Conditions from '@/components/Conditions';
import Form from '@/components/Form';
import {
    UserIcon,
    IdentificationIcon,
} from "@heroicons/react/24/outline";

const Page = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const StepElements = [
        <Conditions key='first' />,
        <Form key='second' />,
    ]


    return (
        <div className='bg-blue-50 px-10 py-5 lg:px-20 lg:py-10'>
            <div className="py-4 px-4">
                <div className='px-4 mb-[120px] md:px-20 lg:px-60'>
                    <Stepper
                        activeStep={activeStep}
                        isLastStep={(value) => setIsLastStep(value)}
                        isFirstStep={(value) => setIsFirstStep(value)}
                    >
                        <Step onClick={() => setActiveStep(0)}>
                            <UserIcon className="h-5 w-5" />
                            <div className="absolute -bottom-[4.5rem] w-max text-center">
                                <Typography
                                    variant="h6"
                                    color={activeStep === 0 ? "blue-gray" : "gray"}
                                >
                                    Paso 1
                                </Typography>
                                <Typography
                                    color={activeStep === 0 ? "blue-gray" : "gray"}
                                    className="font-normal"
                                >
                                    Condiciones de Registro
                                </Typography>
                            </div>
                        </Step>
                        <Step onClick={() => setActiveStep(1)}>
                            <IdentificationIcon className="h-5 w-5" />
                            <div className="absolute -bottom-[4.5rem] w-max text-center">
                                <Typography
                                    variant="h6"
                                    color={activeStep === 0 ? "blue-gray" : "gray"}
                                >
                                    Paso 2
                                </Typography>
                                <Typography
                                    color={activeStep === 0 ? "blue-gray" : "gray"}
                                    className="font-normal"
                                >
                                    Formulario de Registro
                                </Typography>
                            </div>
                        </Step>
                    </Stepper>
                </div>
                <div>
                    {
                        StepElements[activeStep]
                    }
                </div>
                <div className="mt-3 flex justify-center">
                    {
                        isLastStep ? (
                            ''
                        ) : (
                            <Button onClick={handleNext} disabled={isLastStep} className='bg-red-800 text-sm lg:text-lg'>
                                ACEPTO LAS CONDICIONES DE REGISTRO
                            </Button>
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Page