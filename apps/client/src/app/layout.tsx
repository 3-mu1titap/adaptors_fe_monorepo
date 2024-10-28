import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'ADAPTORS',
    template: '%s | MULTITAP App',
  },
  description: 'Mentoring Platform',
  icons: { icon: '/assets/images/icons/icon.png' },
  metadataBase: new URL('https://adaptors.com'),
  openGraph: {
    url: 'https://adaptors.com',
    title: 'ADAPTORS',
    description: 'Mentoring Platform',
    images: [{ url: '/assets/images/og/og_image.png' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
