import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import '@repo/ui/styles.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { Inter } from 'next/font/google';
import CommonSidebar from '../components/aside/metting-room/CommonSidebar';
import { options } from './api/auth/[...nextauth]/options';
import AuthContextProvider from './provider/AuthContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'ADAPTORS',
    template: '%s | MULTITAP App',
  },
  description: 'Mentoring Platform',
  icons: { icon: '/assets/images/icons/icon.svg' },
  metadataBase: new URL('https://adaptors.com'),
  openGraph: {
    url: 'https://adaptors.com',
    title: 'ADAPTORS',
    description: 'Mentoring Platform',
    images: [{ url: '/assets/images/icons.icon.svg' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession(options);
  const isAuth = session?.user ? true : false;
  const role = session?.user?.role ?? null;
  console.log('role??: ', role);
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AuthContextProvider isAuth={isAuth} role={role}>
          <SidebarProvider className="overflow-hidden">
            <CommonSidebar />
            <SidebarTrigger className="z-[1000] hidden md:!block md:fixed" />
            {children}
          </SidebarProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
