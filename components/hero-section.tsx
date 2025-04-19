"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <Image
              src="/IMG_3842.JPG"
              alt="Cristopher Paiva"
              width={6000}
              height={3668}
              className="object-cover w-full h-full rounded-full"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-3 items-center">
            <span className="badge">Disponible para trabajar</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            👋🏾 Hey, soy Cristopher J. Paiva da Silva
          </h1>

          <div className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl space-y-4">
            <p>
              <span className="font-medium">Software Developer & DevOps</span>{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                entusiasta de la tecnología, enfocado en infraestructura de TI,
                automatización de procesos y desarrollo de APIs.
              </span>
            </p>

            <p>
              Con experiencia práctica con herramientas como Jenkins, Git,
              Bitbucket, Axway API Gateway y tecnologías modernas como React y
              TypeScript, he participado en proyectos desafiantes que combinan
              despliegues en la nube, diseño de soluciones escalables y trabajo
              en entornos colaborativos usando metodologías ágiles.
            </p>

            <p className="text-blue-600 dark:text-blue-400 font-medium">
              🧠 Siempre en busca de aprender más, generar impacto real y
              aportar soluciones innovadoras.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-gray-700 dark:text-gray-300 text-sm">
            <span className="flex items-center gap-1">
              <MapPin size={16} className="text-blue-500" />
              Rivera, Uruguay (Disponible para reubicarme a Montevideo)
            </span>
          </div>
          <p>📩 ¡Conectemos y creemos algo increíble juntos!</p>

          <div className="flex flex-wrap gap-3 pt-4">
            <a href="mailto:cristopher.paiva.dev@gmail.com" className="btn btn-primary">
              <Mail size={18} />
              Contáctame
            </a>
            <a
              href="https://linkedin.com/in/pdscristopher"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/cristopherpds"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
