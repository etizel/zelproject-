import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Etizel · Arquitetura Digital & Inteligência Operacional',
  description:
    'Transformando processos complexos (600+ SKUs) em interfaces fluidas. Fullstack Developer & Supply Chain Specialist.',
  other: {
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="font-sans antialiased bg-neutral-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
