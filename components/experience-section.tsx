"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Pasantía en TI",
    company: "Perceptiva",
    location: "Rivera, UY",
    period: "Agosto 2023 – Julio 2024",
    website: "https://perceptiva.tech/",
    description: [
      "Participé en entrenamientos y actividades de capacitación para dominar tecnologías relacionadas con el Axway API Gateway y otras soluciones.",
      "Desempeñé un rol en DevOps e infraestructura, apoyando los procesos de despliegue e implementación de soluciones.",
      "Aprendí y apliqué principios de control de versiones y manejo de repositorios en Git, promoviendo un enfoque organizado y transparente para la gestión del código.",
      "Realicé diversos tipos de despliegues y pruebas de concepto para clientes, adaptándome a sus necesidades específicas, utilizando herramientas como Git, BitBucket, Jenkins, JFrog Artifactory, ngrok, Policy Studio, Groovy y Axway.",
      "Inicié el desarrollo de APIs (REST, SOAP) utilizando la tecnología Axway, ofreciendo soluciones innovadoras y eficientes.",
      "Me preparé para la certificación de Google Professional Cloud Architect, mejorando mis conocimientos para afrontar futuros desafíos profesionales.",
    ],
  },
  {
    title: "Pasante Scholarship Program - Front-end",
    company: "Compass.uol",
    location: "Santana do Livramento, Brasil",
    period: "Junio 2022 – Octubre 2022",
    website: "https://compass.uol/en/home/",
    description: [
      "Desarrollé páginas web y aplicaciones responsivas utilizando HTML, CSS, JavaScript, React y TypeScript, basándome en diseños de Figma y aplicando principios de mobile-first.",
      "Implementé características como una aplicación móvil de tres páginas con navegación táctil y un formulario multietapa con validación en el cliente y visualización de datos.",
      "Diseñé e implementé un sistema de inicio de sesión y un panel de control con componentes personalizados en React y TypeScript.",
      "Colaboré en un equipo Scrum, fortaleciendo habilidades como trabajo en equipo, gestión del tiempo y comunicación efectiva.",
      "Obtuve experiencia práctica en el desarrollo de APIs REST e implementación de autenticación con Firebase.",
      "Esta experiencia consolidó mis conocimientos técnicos y me ayudó a desarrollar habilidades interpersonales clave para mi carrera profesional.",
    ],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="experiencia" className="py-16" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Briefcase size={24} />
        Experiencia laboral
      </motion.h2>

      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="mb-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">{experience.company}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{experience.location}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{experience.period}</span>
              </div>
            </div>
            <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-5">
              {experience.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {experience.website && (
  <a
    href={experience.website}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium mt-2 hover:underline"
  >
    Saber más <ExternalLink size={16} className="ml-1" />
  </a>
)}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
