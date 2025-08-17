import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/Whatsapp-float";

export const metadata: Metadata = {
  title: "IMESAC | Ingeniería Eléctrica en Baja y Media Tensión",
  description:
    "Servicios de ingeniería eléctrica en baja y media tensión. Personal calificado, calidad, eficiencia y respuesta rápida. IMESAC: experiencia y confianza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

