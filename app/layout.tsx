import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'Freemen || Kok suckers',
  description: 'where chad man live and strives!!!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
