import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VTA — Voice-to-Action",
  description: "Transforme áudios do WhatsApp em tarefas e eventos no seu Google.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
