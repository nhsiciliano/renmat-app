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

const linkBase =
  "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-slate-700 transition-colors hover:text-brand focus-visible:text-brand";

function Wordmark() {
  return (
    <Link
      href="/"
      className="group inline-flex items-baseline gap-1 text-[22px] font-semibold tracking-tight"
      aria-label="RegArMAT — ir al inicio"
    >
      <span className="text-slate-900 transition-colors group-hover:text-accent">
        RegAr
      </span>
      <span className="text-brand">MAT</span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Wordmark />

        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">
              {mainLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(navigationMenuTriggerStyle(), linkBase)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-sm font-medium text-slate-700"
                  )}
                >
                  Herramientas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-1 p-2">
                    {toolLinks.map((tool) => (
                      <li key={tool.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={tool.href}
                            className="block rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
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
                  className={cn(navigationMenuTriggerStyle(), linkBase)}
                >
                  <Link href={contactLink.href}>{contactLink.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/condiciones" className="hidden lg:inline-block">
            <Button
              size="sm"
              className="h-9 rounded-full bg-brand px-5 text-sm font-medium text-white shadow-none hover:bg-brand/90"
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
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle>
                  <Wordmark />
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col px-2">
                {mainLinks.map((item) => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="flex h-11 items-center rounded-md px-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
                <li className="mt-3 flex items-center justify-between px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Herramientas
                  <ChevronDownIcon className="size-3.5" />
                </li>
                {toolLinks.map((tool) => (
                  <li key={tool.href}>
                    <SheetClose asChild>
                      <Link
                        href={tool.href}
                        className="flex h-10 items-center rounded-md px-6 text-sm text-slate-700 hover:bg-slate-50"
                      >
                        {tool.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
                <li className="mt-1">
                  <SheetClose asChild>
                    <Link
                      href={contactLink.href}
                      className="flex h-11 items-center rounded-md px-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                    >
                      {contactLink.label}
                    </Link>
                  </SheetClose>
                </li>
              </ul>
              <div className="mt-auto px-4 pb-4">
                <SheetClose asChild>
                  <Link href="/condiciones" className="w-full">
                    <Button
                      className="w-full rounded-full bg-brand text-white hover:bg-brand/90"
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
    </header>
  );
}
