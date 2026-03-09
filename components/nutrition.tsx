import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  "Menus personalizados segun requerimientos nutricionales",
  "Opciones para dietas especiales y restricciones alimentarias",
  "Control de porciones y balance calorico",
  "Ingredientes frescos y de alta calidad",
  "Supervision de nutricionistas certificados",
];

export function Nutrition() {
  return (
    <section id="nutricion" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Comida saludable y nutritiva"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-primary">
              Bienestar Integral
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Programas de Nutricion
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Entendemos que una alimentacion balanceada es fundamental para el
              rendimiento y bienestar de sus colaboradores. Nuestros programas
              nutricionales estan disenados para maximizar la energia y
              productividad.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
