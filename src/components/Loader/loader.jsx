"use client";
import { useEffect, useState } from "react";
import "./loader.css";


const BookSVG = () => (
  <svg
    className="loader__icon"
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="52"
    viewBox="0 0 64 64"
  >
    <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4h32a4 4 0 014 4v44a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4z" />
      <path d="M40 4h16a4 4 0 014 4v44a4 4 0 01-4 4H40a4 4 0 01-4-4V8a4 4 0 014-4z" />
      <line x1="8" y1="20" x2="40" y2="20" />
      <line x1="8" y1="36" x2="40" y2="36" />
      <line x1="8" y1="52" x2="40" y2="52" />
    </g>
  </svg>
);

export default function Loader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div className="loader">
      <div className="loader__text">
  <span className="highlight">Forstner</span>Libras
</div>

      <BookSVG />
    </div>
  );
}
