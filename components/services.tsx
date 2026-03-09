import { Building2, Briefcase, Home } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Catering Industrial y Constructoras",
    description:
      "Alimentacion masiva para campamentos y obras. Menus energeticos disenados para alto rendimiento fisico con estrictos protocolos de seguridad e higiene.",
  },
  {
    icon: Briefcase,
    title: "Oficinas y Empresas",
    description:
      "Almuerzos diarios y coffee breaks de alta calidad. Una imagen impecable para los momentos clave de su institucion con puntualidad garantizada.",
  },
  {
    icon: Home,
    title: "Reuniones Familiares y Sociales",
    description:
      "Atencion exclusiva en Guayaquil y Salinas para eventos sociales privados, bodas y aniversarios con menu de autor.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-primary">
            Especialidades
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Soluciones a Medida
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-primary" />
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-primary/10 bg-secondary p-8 transition-all hover:border-primary"
            >
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-primary" strokeWidth={1} />
              </div>
              <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
