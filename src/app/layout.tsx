import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Love the Outfit - Curated Fashion Inspiration',
  description: 'Discover your perfect style with our curated fashion looks. From minimalist to Y2K, find outfits that match your aesthetic.',
  keywords: 'fashion, style, outfit, aesthetic, minimalist, dark academia, cottagecore, y2k, clothing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f5f5f4" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
} 