export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 font-serif text-lg font-bold tracking-[0.3em] text-primary">
          JJCATERING S.A.S.
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
