// app/client-layout.jsx
"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/Footer/footer";
import Loader from "@/components/Loader/loader";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app-container">
      <div className="main-content">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
