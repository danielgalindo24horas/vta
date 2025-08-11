import "./globals.css";
import type { Metadata } from "next";
import RegisterSW from "@/components/RegisterSW";

export const metadata: Metadata = {
  title: "VTA — Voice-to-Action",
  description: "Transforme áudios do WhatsApp em tarefas e eventos no seu Google.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0b0b0b" />
      </head>
      <body>
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
