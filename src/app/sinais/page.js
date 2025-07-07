"use client";
import { useState, useEffect } from "react";
import "./sinais.css";

export default function Sinais() {
  const [search, setSearch] = useState("");
  const [sinais, setSinais] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [letraAtiva, setLetraAtiva] = useState("");
  const [selecionado, setSelecionado] = useState(null);

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    fetch("/sinais.json")
      .then((res) => res.json())
      .then((data) => {
        setSinais(data);
        setFiltrados(data);
      });
  }, []);

  useEffect(() => {
    let resultado = sinais;

    if (search) {
      resultado = resultado.filter((item) =>
        item.nome.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (letraAtiva) {
      resultado = resultado.filter((item) =>
        item.nome
          .normalize("NFD")
          .replace(/[^a-zA-Z]/g, "")
          .toUpperCase()
          .startsWith(letraAtiva)
      );
    }

    setFiltrados(resultado);
  }, [search, letraAtiva, sinais]);

  const letrasDisponiveis = alfabeto.reduce((acc, letra) => {
    const existe = sinais.some((item) =>
      item.nome
        .normalize("NFD")
        .replace(/[^a-zA-Z]/g, "")
        .toUpperCase()
        .startsWith(letra)
    );
    acc[letra] = existe;
    return acc;
  }, {});

  return (
    <main className="sinais-page">
      {!selecionado ? (
        <>
          <div className="cabecalho-busca">
            <h1 className="titulo">📚 Dicionário de Sinais em Libras</h1>
            <input
              type="text"
              className="search-bar"
              placeholder="Buscar sinal..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filtros-container">
            
            <div className="botoes-filtros"   style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <button onClick={() => setLetraAtiva("")}>Todos</button>
              {alfabeto.map((letra) => (
                <button
                  key={letra}
                  className={letra === letraAtiva ? "ativo" : ""}
                  onClick={() => setLetraAtiva(letra)}
                  disabled={!letrasDisponiveis[letra]}
                  style={{
                    opacity: letrasDisponiveis[letra] ? 1 : 0.3,
                    cursor: letrasDisponiveis[letra]
                      ? "pointer"
                      : "not-allowed",
                  }}
                >
                  {letra}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-sinais">
            {filtrados.map((item, index) => (
              <div
                key={index}
                className="card-sinal"
                onClick={() => setSelecionado(item)}
              >
                <h3>{item.nome}</h3>
              </div>
            ))}
            {filtrados.length === 0 && (
              <p style={{ textAlign: "center", marginTop: "40px", opacity: 0.7 }}>
                Nenhum sinal encontrado.
              </p>
            )}
          </div>
        </>
      ) : (
        <div
          className="detalhes-sinal movie-style"
          style={{
            backgroundImage: selecionado.capa
              ? `url(${selecionado.capa})`
              : "none",
          }}
        >
          <button className="voltar" onClick={() => setSelecionado(null)}>
            ← Voltar
          </button>

          <div className="info-section">
            <h2>{selecionado.nome}</h2>
            <ul>
<li>
  <strong>Mão</strong>
  {selecionado.mao ? (
    <img
      src={selecionado.mao}
      alt="Imagem da mão"
      style={{ maxWidth: "120px", borderRadius: "8px", marginTop: "8px" }}
    />
  ) : (
    "—"
  )}
</li>

              <li>
                <strong>Assunto</strong>
                {selecionado.assunto || "—"}
              </li>
            
            </ul>
          </div>

          <div className="video-section">
            <video
              src={selecionado.video}
              controls
              poster={selecionado.capa}
            />
            {selecionado.imagem && (
              <img
                src={selecionado.imagem}
                alt="Imagem do sinal"
                className="imagem-detalhe"
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
}
