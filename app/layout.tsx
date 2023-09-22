import Header from '@/components/Header/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Providers from '@/components/Providers/Providers';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '18xx-app',
  description: 'Bank manager',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};
