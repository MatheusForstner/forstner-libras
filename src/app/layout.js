// app/layout.js
import { Prompt } from 'next/font/google';
import ClientLayout from './client-layout';
import './globals.css';

export const metadata = {
  title: "Forstner Libras",
  icons: {
    icon: "/fl-icon.svg",
  },
};

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
