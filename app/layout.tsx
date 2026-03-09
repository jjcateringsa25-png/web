import type { Metadata, Viewport } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JJCATERING S.A.S. | Soluciones Gastronomicas Integrales",
  description:
    "Mas de una decada alimentando el exito de grandes proyectos, empresas constructoras y eventos de alto nivel en Guayaquil y Salinas, Ecuador.",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cinzel.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
