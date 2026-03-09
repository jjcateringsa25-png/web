const stats = [
  { value: "10+", label: "Anos de Trayectoria" },
  { value: "500k+", label: "Platos Servidos" },
  { value: "24/7", label: "Logistica Ininterrumpida" },
  { value: "100%", label: "Cumplimiento Normativo" },
];

export function Stats() {
  return (
    <section className="border-y border-primary/10 bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 font-serif text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
