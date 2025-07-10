"use client";
import "./cards-module.css";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Matheus Forstner",
    text: "Desenvolvimento de sistemas e ensino de Libras.",
    image: "/Matheus_Forstner.png",
    link: "/sobre",
    label: "Sobre Mim"
  },
  {
    title: "TikTok",
    text: "Tem vários vídeos ensinando sinais em Libras.",
    image: "/tiktok.png",
    link: "/tiktok",
    label: "Ver TikTok"
  },
  {
    title: "Diário de Sinais em Libras",
    text: "Encontre aqui seu diário de sinais em Libras.",
    image: "/diario.png",
    link: "/sinais",
    label: "Acessar Diário"
  },
  {
    title: "Curso de Sinais em Libras",
    text: "Aproveite para estudar o curso de sinais online.",
    image: "/curso_de_libras.png",
    link: "/cursos",
    label: "Ver Curso"
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsTyping(false);
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [current]);

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const { title, text, image, link, label } = slides[current];

  return (
    <main className="hero-section">
      <div className="slider-controls">
        <button className="nav-button" onClick={goToPrev}>
          &#10094;
        </button>
        <button className="nav-button" onClick={goToNext}>
          &#10095;
        </button>
      </div>

      <div className="hero-content">
        <div className="text-section">
          <h5>Olá, bem-vindo(a)</h5>
          <h1>{title}</h1>
          <h4 className={`typing-effect ${isTyping ? "typing" : ""}`}>
            {text}
          </h4>
          <a href={link} className={`btn-contact contact-${current}`}>
            {label} <i className="fa fa-arrow-right"></i>
          </a>
        </div>

        <div className="image-section">
          <img src={image} alt="Slide" />
        </div>
      </div>

      <div className="slider-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${current === idx ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </main>
  );
}
