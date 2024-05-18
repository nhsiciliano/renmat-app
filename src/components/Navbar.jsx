"use client"

import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Navigate = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpen(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link href='/' legacyBehavior={true}>
                    <a className="flex items-center hover:text-red-800 transition duration-300 ease-in-out">
                        Inicio
                    </a>
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link href='/descripcion-mat' legacyBehavior={true}>
                    <a className="flex items-center hover:text-red-800 transition duration-300 ease-in-out">
                        Descripción MAT
                    </a>
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link href='/registro' legacyBehavior={true}>
                    <a className="flex items-center hover:text-red-800 transition duration-300 ease-in-out">
                        Registro
                    </a>
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Menu>
                    <MenuHandler>
                        <a className="flex items-center cursor-pointer hover:text-red-800 transition duration-300 ease-in-out">
                            Herramientas
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-1 mt-1 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </a>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>
                            <Link href='/bibliografia' legacyBehavior={true}>Bibliografía</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href='/score-plasmic' legacyBehavior={true}>Score Plasmic</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href='/videos' legacyBehavior={true}>Videos</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Typography>
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link href='/contacto' legacyBehavior={true}>
                    <a className="flex items-center hover:text-red-800 transition duration-300 ease-in-out">
                        Contacto
                    </a>
                </Link>
            </Typography>
        </ul>
    );

    return (
        <div className="sticky top-0 z-10 m-3 max-h-[768px] overflow-hidden px-4 py-2 lg:px-8 lg:py-4">
            <Navbar className="h-max max-w-full rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link href='/'>
                        <div className="text-[30px] font-bold">
                            <span className="text-blue-900">RegAr</span><span className="text-red-800">MAT</span>
                        </div>
                    </Link>
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-x-1">
                            <Link href='/condiciones' legacyBehavior={true}>
                                <Button
                                    variant="gradient"
                                    color="indigo"
                                    size="md"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Quiero Registrarme</span>
                                </Button>
                            </Link>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpen(!open)}
                        >
                            {open ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={open}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Link href='/condiciones' legacyBehavior={true}>
                            <Button fullWidth variant="gradient" size="md" color="indigo" className="">
                                <span>Quiero Registrarme</span>
                            </Button>
                        </Link>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigate