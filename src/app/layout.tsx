import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import './globals.css';

import ReduxProvider from '@/components/providers/redux-provider';
import Navigation from '@/components/navigation';
import ErrorNotificationHandler from '@/components/error-notification-handler';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TravelTrucks - Campers of your dreams',
  description: 'Find and rent the perfect camper for your next adventure',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReduxProvider>
          <div className="flex min-h-screen flex-col items-center">
            <Navigation />
            {children}
          </div>
          <ErrorNotificationHandler />
          <Toaster position="top-right" />
        </ReduxProvider>
      </body>
    </html>
  );
}
