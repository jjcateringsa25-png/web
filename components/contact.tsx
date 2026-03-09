import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicacion",
    lines: ["Guayaquil, Ecuador", "Salinas, Ecuador"],
  },
  {
    icon: Phone,
    title: "Telefono",
    lines: ["+593 99 845 0744"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@jjcatering.com"],
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Lunes - Domingo", "24/7 Disponibles"],
  },
];

export function Contact() {
  return (
    <section id="contacto" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-primary">
            Contactenos
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Hablemos de su Proyecto
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-primary" />
        </div>

        {/* Contact Grid */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-primary/20">
                <info.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                {info.title}
              </h3>
              {info.lines.map((line, i) => (
                <p key={i} className="text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="mb-6 text-muted-foreground">
            Solicite su cotizacion personalizada via WhatsApp
          </p>
          <a
            href="https://wa.me/5939984507444"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary px-12 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
