import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Aristocrat | Creative Studio for the Music World',
  description: 'Visual content and creative studio for music artists. True to your sound.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}