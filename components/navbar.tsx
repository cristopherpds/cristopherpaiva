"use client"
import Link from "next/link"
import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeSwitcher from "./theme-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full py-4 px-6 md:px-12 sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          <span className="text-blue-500">&lt;</span>
          CristopherPaiva
          <span className="text-blue-500">/&gt;</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#sobre-mi">Sobre mí</NavLink>
            <NavLink href="#experiencia">Experiencia</NavLink>
            <NavLink href="#educacion">Educación</NavLink>
            <NavLink href="#proyectos">Proyectos</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 p-4 md:hidden border-b border-gray-100 dark:border-gray-800 shadow-md">
            <div className="flex flex-col space-y-4">
              <NavLink href="#sobre-mi" onClick={() => setIsOpen(false)}>
                Sobre mí
              </NavLink>
              <NavLink href="#experiencia" onClick={() => setIsOpen(false)}>
                Experiencia
              </NavLink>
              <NavLink href="#educacion" onClick={() => setIsOpen(false)}>
                Educación
              </NavLink>
              <NavLink href="#proyectos" onClick={() => setIsOpen(false)}>
                Proyectos
              </NavLink>
              <NavLink href="#contacto" onClick={() => setIsOpen(false)}>
                Contacto
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} className="nav-link" onClick={onClick}>
      {children}
    </Link>
  )
}
