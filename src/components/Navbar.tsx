"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavLink = { href: string; label: string };

const mainLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/descripcion-mat", label: "Descripción MAT" },
  { href: "/registro", label: "Registro" },
];

const toolLinks: NavLink[] = [
  { href: "/bibliografia", label: "Bibliografía" },
  { href: "/score-plasmic", label: "Score Plasmic" },
  { href: "/videos", label: "Videos" },
];

const contactLink: NavLink = { href: "/contacto", label: "Contacto" };

const linkStyle =
  "flex items-center px-3 py-2 text-base font-normal transition duration-300 ease-in-out hover:text-red-800";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 m-3 max-h-[768px] overflow-hidden px-4 py-2 lg:px-8 lg:py-4">
      <nav className="flex h-max max-w-full items-center justify-between rounded-lg bg-white/30 px-4 py-2 text-blue-gray-900 backdrop-blur-lg backdrop-filter lg:px-6">
        <Link href="/" className="shrink-0">
          <div className="text-[30px] font-bold">
            <span className="text-blue-900">RegAr</span>
            <span className="text-red-800">MAT</span>
          </div>
        </Link>

        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {mainLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(navigationMenuTriggerStyle(), linkStyle)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-normal">
                  Herramientas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    {toolLinks.map((tool) => (
                      <li key={tool.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={tool.href}
                            className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                          >
                            {tool.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(navigationMenuTriggerStyle(), linkStyle)}
                >
                  <Link href={contactLink.href}>{contactLink.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/condiciones"
            className="hidden lg:inline-block"
          >
            <Button
              size="default"
              className="bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white hover:from-indigo-700 hover:to-indigo-500"
            >
              Quiero Registrarme
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menú"
              >
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle>
                  <span className="text-blue-900">RegAr</span>
                  <span className="text-red-800">MAT</span>
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {mainLinks.map((item) => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link href={item.href} className={linkStyle}>
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
                <li className="mt-2 text-sm font-semibold text-gray-600">
                  <span className="flex items-center gap-1">
                    Herramientas
                    <ChevronDownIcon className="size-4" />
                  </span>
                </li>
                {toolLinks.map((tool) => (
                  <li key={tool.href}>
                    <SheetClose asChild>
                      <Link
                        href={tool.href}
                        className={cn(linkStyle, "pl-6")}
                      >
                        {tool.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
                <li>
                  <SheetClose asChild>
                    <Link href={contactLink.href} className={linkStyle}>
                      {contactLink.label}
                    </Link>
                  </SheetClose>
                </li>
              </ul>
              <div className="mt-4 flex items-center gap-x-1 px-4">
                <SheetClose asChild>
                  <Link href="/condiciones" className="w-full">
                    <Button
                      className="w-full bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white hover:from-indigo-700 hover:to-indigo-500"
                      size="lg"
                    >
                      Quiero Registrarme
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
