import React from 'react';
import { Metadata } from 'next';
import Nav from '../components/elements/header/Header';
import "./globals.scss";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  )
}