import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { TranslationProvider } from '@/contexts/TranslationContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ask Maya - Your Cool AI Speaking Buddy! 🎯',
  description: 'Level up your English speaking skills with Maya - your 24/7 AI buddy who makes learning fun! 🚀',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
        <Toaster />
      </body>
    </html>
  );
}