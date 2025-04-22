"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, ExternalLink } from "lucide-react"

const education = [
  {
    institution: "Universidad Tecnológica - UTEC",
    location: "Rivera, UY",
    degree: "Tecnólogo en Análisis y Desarrollo de Sistemas",
    period: "Noviembre 2021 – Actualidad",
  },
  {
    institution: "Universidad del Trabajo del Uruguay - UTU",
    location: "Rivera, UY",
    degree: "Bachillerato Tecnológico en Informática",
    period: "Marzo 2015 – Noviembre 2020",
  },
]

const certifications = [
  "Desarrollo Web — Jóvenes a Programar - Plan Ceibal",
  "CCNA R&S: Introduction to Networks — CETP Polo Educativo Tecnológico Rivera",
  "IT Essentials: PC Hardware and Software — CETP Polo Educativo Tecnológico Rivera",
]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="educacion" className="py-16" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <GraduationCap size={24} />
        Educación
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Formación Académica</h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.degree}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{item.institution}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{item.location}</span>
                  <span>•</span>
                  <span>{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cursos y Certificaciones</h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Award size={20} className="text-blue-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{cert}</span>
              </div>
            ))}
            
            {/* Card adicional para "Ver más..." */}
            <a 
              href="https://www.linkedin.com/in/pdscristopher/details/certifications/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <ExternalLink size={20} className="text-blue-500" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Ver más certificaciones...</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
