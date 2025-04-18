//import Image from "next/image";
//import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Cristopher Paiva
        </h1>
      </header>
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-5xl">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Portfolio en Construcción</h2>
          <div className="relative w-full h-64 sm:h-80 mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <p className="text-lg sm:text-xl font-semibold mb-2">🚧 En Desarrollo 🚧</p>
                <p className="text-sm sm:text-base text-foreground/70">
                  Estoy construyendo algo increíble. ¡Regresa pronto!
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full space-y-6">
            <section className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Sobre Mí</h3>
              <p className="text-foreground/80">
                Soy un desarrollador apasionado por crear experiencias digitales significativas.
                Mi portfolio está actualmente en construcción, pero pronto estaré mostrando mis
                proyectos y habilidades aquí.
              </p>
            </section>
            
            <section className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Próximamente</h3>
              <ul className="list-disc list-inside text-foreground/80 space-y-1">
                <li>Proyectos destacados con estudios de caso detallados</li>
                <li>Habilidades técnicas y experiencia</li>
                <li>Antecedentes profesionales y trayectoria</li>
                <li>Información de contacto y enlaces a redes sociales</li>
              </ul>
            </section>
          </div>
          
          <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="mailto:cristopher.paiva.dev@gmail.com"
              rel="noopener noreferrer"
            >
              Contáctame
            </a>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Cristopher Paiva
        </div>
        <div className="flex gap-4">
          <a 
            href="https://github.com/cristopherpds" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/pdscristopher" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
