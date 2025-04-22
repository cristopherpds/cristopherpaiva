"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Send, Linkedin, Github } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [state, handleSubmit] = useForm("xjkwbdkr")

  return (
    <section id="contacto" className="py-16" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Mail size={24} />
        Contacto
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">¿Tienes un proyecto en mente?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Estoy disponible para trabajar en proyectos desafiantes y oportunidades a tiempo completo. Si tienes una
            idea o necesitas ayuda con un proyecto existente, no dudes en contactarme.
          </p>

          <div className="space-y-3 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <a
                  href="mailto:cristopher.paiva.dev@gmail.com"
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                >
                  cristopher.paiva.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <Linkedin size={18} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/pdscristopher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                >
                  linkedin.com/in/pdscristopher
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <Github size={18} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                <a
                  href="https://github.com/cristopherpds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                >
                  github.com/cristopherpds
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {state.succeeded ? (
            <div className="p-6 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">¡Mensaje enviado correctamente!</h3>
              <p className="text-green-600 dark:text-green-300">
                Gracias por ponerte en contacto. Te responderé a la brevedad posible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-gray-100"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-gray-100"
                  placeholder="tu@email.com"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 dark:text-gray-100"
                  placeholder="¿En qué puedo ayudarte?"
                  required
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-full"
                disabled={state.submitting}
              >
                {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
                {!state.submitting && <Send size={16} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
