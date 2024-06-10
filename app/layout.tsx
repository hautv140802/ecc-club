import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/styles/styles.css';
import MainHeader from '@/components/headers/MainHeader';
import images from '@/assets/images';
import icons from '@/assets/svgs';
import { Head } from 'next/document';
import MainFooter from '@/components/footers/MainFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ECC CLUB',
  description: 'ECC UIT',
  icons: icons.logo,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />

        {children}

        <MainFooter />
      </body>
    </html>
  );
}
