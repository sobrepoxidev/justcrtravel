import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just Costa Rica Travel",
  description: "Descubre Costa Rica con los mejores paquetes turísticos personalizados",
  keywords: "costa rica, viajes, turismo, aventura, naturaleza, vacaciones",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}