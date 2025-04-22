"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code, ExternalLink, Github, Construction } from "lucide-react"

const projects = [
  {
    title: "API Gateway Solutions",
    description: "Desarrollo de APIs REST y SOAP utilizando tecnología Axway para clientes empresariales.",
    tags: ["Axway", "API Gateway", "Groovy", "REST", "SOAP"],
    image: "/placeholder.svg?height=200&width=400",
    github: "#",
    demo: "#",
  },
  {
    title: "Panel de Control React",
    description: "Sistema de inicio de sesión y panel de control con componentes personalizados en React y TypeScript.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "/placeholder.svg?height=200&width=400",
    github: "#",
    demo: "#",
  },
  {
    title: "Aplicación Móvil Multietapa",
    description: "Aplicación móvil con navegación táctil y formulario multietapa con validación en el cliente.",
    tags: ["React", "JavaScript", "Mobile-first", "Figma"],
    image: "/placeholder.svg?height=200&width=400",
    github: "#",
    demo: "#",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="proyectos" className="py-16" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Code size={24} />
        Proyectos
      </motion.h2>
      
      {/* Banner de WIP */}
      <motion.div
        className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg flex items-center gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        <Construction size={24} className="text-blue-500 flex-shrink-0" />
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Trabajo en progreso:</span> Esta sección está actualmente en desarrollo. Los proyectos mostrados son representaciones preliminares.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Ver código en GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.demo}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Ver demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
