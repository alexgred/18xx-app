import Header from '@/components/Header/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Providers from '@/components/Providers/Providers';

const openSans = Open_Sans({ subsets: ['latin'] });

interface State {
  bank: number;
  players: Player[];
  companies: Company[];
}

export const metadata: Metadata = {
  title: '18xx-app',
  description: 'Bank manager',
};

const initialState: State = {
  bank: 15000,
  players: [
    { id: 0, name: 'Player 1', total: 12 },
    { id: 1, name: 'Player 2', total: 812 },
    { id: 2, name: 'Player 3', total: 87 },
  ],
  companies: [
    {
      id: 0,
      name: 'Company 1',
      total: 12,
      director: 2,
    },
    {
      id: 1,
      name: 'Company 2',
      total: 12,
      director: 2,
    },
    {
      id: 2,
      name: 'Company 3',
      total: 12,
      director: 1,
    },
    {
      id: 4,
      name: 'Company 4',
      total: 12,
      director: 0,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers initialState={initialState}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};
