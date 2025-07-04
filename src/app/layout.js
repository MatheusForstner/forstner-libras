"use client";

import { useState, useEffect } from "react";
import { Prompt } from 'next/font/google'
import { Header } from '@/components/Header/header';
import { Footer } from '@/components/Footer/footer';
import Loader from '@/components/Loader/loader';

import './globals.css'

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // duração do loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <html lang="pt-br" className={prompt.className}>
        <body>
          <Loader />
        </body>
      </html>
    );
  }

  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <div className="main-content">
            <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  integrity="sha512-..."
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
