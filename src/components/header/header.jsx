"use client";

import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [horaAtual, setHoraAtual] = useState("00:00");
  const [showMenu, setShowMenu] = useState(false);

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

        <div className="clock-inline">
          <div className="clock-sinais">
            {horaAtual.split("").map((char, index) =>
              char === ":" ? (
                <span key={index} className="clock-separator">:</span>
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

        <div className="actions">
          <button className="btn-mode" onClick={toggleDarkMode}>
            {isDark ? "☀️" : "🌙"}
          </button>
          <div className="user-info">
            <span>Olá, pessoal</span>
            <div className="avatar">PS</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;