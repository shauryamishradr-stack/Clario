import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clario',
  description: 'Luxury executive AI operating system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-matte">
      <body className="text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
