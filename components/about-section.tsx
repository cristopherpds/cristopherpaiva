"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { User } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="sobre-mi" className="py-16" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <User size={24} />
        Sobre mí
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Perfil Profesional</h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Profesional responsable, adaptable y comprometido con el aprendizaje continuo. Poseo experiencia en
              DevOps, desarrollo de APIs e infraestructura de TI, con un enfoque particular en tecnologías de nube y
              soluciones de API Gateway.
            </p>
            <p>
              Busco aplicar y expandir mis habilidades técnicas y contribuir significativamente a proyectos desafiantes.
              Resido en Rivera y tengo disponibilidad para reubicarme a Montevideo.
            </p>
            <p>
              Mi experiencia incluye trabajo con tecnologías como Axway API Gateway, Git, Jenkins, y desarrollo de APIs
              REST y SOAP. También tengo experiencia en desarrollo frontend con React y TypeScript.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Habilidades</h3>
          <div className="grid grid-cols-2 gap-4">
            <SkillCategory
              title="Lenguajes"
              skills={["Java", "JavaScript", "TypeScript", "MySQL", "MongoDB", "HTML5/CSS3", "Groovy", "Shell Script"]}
            />
            <SkillCategory title="Frameworks" skills={["React", "Node.js", "Laravel", "WordPress"]} />
            <SkillCategory
              title="Herramientas"
              skills={[
                "Git",
                "Docker",
                "Google Cloud Platform",
                "VS Code",
                "Visual Studio",
                "Jenkins",
                "ngrok",
                "JFrog",
              ]}
            />
            <SkillCategory
              title="Idiomas"
              skills={["Español (Nativo)", "Portugués (Nativo/Bilingüe)", "Inglés (Bajo Intermedio - A2)"]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h4 className="font-medium text-gray-900 dark:text-white mb-2">{title}</h4>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300 text-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
