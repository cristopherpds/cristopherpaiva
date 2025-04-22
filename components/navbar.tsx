"use client"
import Link from "next/link"
import type React from "react"



export default function Navbar() {

  return (
    <header className="w-full py-4 px-6 md:px-12 sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          <span className="text-blue-500">&lt;</span>
          CristopherPaiva
          <span className="text-blue-500">/&gt;</span>
        </Link>

        <div className="flex items-center gap-4">

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#sobre-mi">Sobre mí</NavLink>
            <NavLink href="#experiencia">Experiencia</NavLink>
            <NavLink href="#educacion">Educación</NavLink>
            <NavLink href="#proyectos">Proyectos</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </nav>
        </div>
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
