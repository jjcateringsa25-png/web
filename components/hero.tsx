import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Catering profesional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-primary">
          Guayaquil &bull; Salinas
        </p>

        <h1 className="mb-8 font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Excelencia Operativa en Catering Industrial
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
          Mas de una decada alimentando el exito de grandes proyectos, empresas
          constructoras y eventos de alto nivel con precision logistica y sabor
          inigualable.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contacto"
            className="w-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 sm:w-auto"
          >
            Agendar Degustacion Gratis
          </Link>
          <Link
            href="#servicios"
            className="w-full border border-foreground/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:bg-foreground hover:text-background sm:w-auto"
          >
            Nuestros Servicios
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
