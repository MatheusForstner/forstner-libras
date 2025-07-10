"use client";

import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [horaAtual, setHoraAtual] = useState("00:00");
  const [showMenu, setShowMenu] = useState(false);
  const [mostrarHora, setMostrarHora] = useState(false); // NOVO: controle do relógio

  useEffect(() => {
    const saved = localStorage.getItem("dark-mode") === "true";
    setIsDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("dark-mode", newMode);
  };

  useEffect(() => {
    const atualizarHora = () => {
      const agora = new Date();
      const hora = agora.getHours().toString().padStart(2, "0");
      const minuto = agora.getMinutes().toString().padStart(2, "0");
      setHoraAtual(`${hora}:${minuto}`);
    };

    atualizarHora();
    const timer = setInterval(atualizarHora, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="main-header">
      <div className="logo">
        <span className="highlight">Forstner</span>Libras
      </div>

      {/* Botão mobile */}
      <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </button>

      {/* Menu mobile completo */}
      <div className={`mobile-menu ${showMenu ? "show" : ""}`}>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/tiktok">Tiktok</a>
          <a href="/sinais">Sinais</a>
          <a href="/cursos">Cursos</a>
        </nav>

        {/* Ícone para mostrar/ocultar o relógio */}
        <button
          className="btn-clock"
          onClick={() => setMostrarHora(!mostrarHora)}
          title="Ver hora"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </button>

        {/* Relógio em Libras (aparece somente se mostrarHora for true) */}
        {mostrarHora && (
          <div className="clock-inline">
            <div className="clock-sinais">
              {horaAtual.split("").map((char, index) =>
                char === ":" ? (
                  <span key={index} className="clock-separator">
                    :
                  </span>
                ) : (
                  <img
                    key={index}
                    src={`/sinais/${char}.png`}
                    alt={`Número ${char}`}
                    className="clock-sinal-img"
                  />
                )
              )}
            </div>
          </div>
        )}

        <div className="actions">
          <label className="switch">
            <input type="checkbox" checked={isDark} onChange={toggleDarkMode} />
            <span className="slider">
              <div className="moons-hole">
                <div className="moon-hole"></div>
                <div className="moon-hole"></div>
                <div className="moon-hole"></div>
              </div>
              <div className="black-clouds">
                <div className="black-cloud"></div>
                <div className="black-cloud"></div>
                <div className="black-cloud"></div>
              </div>
              <div className="clouds">
                <div className="cloud"></div>
                <div className="cloud"></div>
                <div className="cloud"></div>
                <div className="cloud"></div>
                <div className="cloud"></div>
                <div className="cloud"></div>
                <div className="cloud"></div>
              </div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="star" viewBox="0 0 20 20">
                    <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                  </svg>
                ))}
              </div>
            </span>
          </label>

          <div className="user-info">
            <span>Olá, bem-vindo</span>
            <div className="avatar">PS</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
