import type React from "react"
import { Github, Linkedin} from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} <a href="https://linkedin.com/in/pdscristopher" 
              target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >Developed by Cristopher Paiva</a>
            </p>
          </div>

          <div className="flex space-x-4">
            <SocialLink href="https://github.com/cristopherpds" icon={<Github size={18} />} label="GitHub"  />
            <SocialLink href="https://linkedin.com/in/pdscristopher" icon={<Linkedin size={18} />} label="LinkedIn" />
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {icon}
    </a>
  )
}
