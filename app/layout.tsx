import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Свод аниме',
  description: 'Все о вашем любимом аниме',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
