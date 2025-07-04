import "./cursos.css";

export default function Cursos() {
  return (
    <main className="cursos-construcao">
      <div className="construcao-box">
        <HelmetSVG />
        <h1>🚧 Página em Construção</h1>
        <p>Estamos preparando algo incrível para você. Volte em breve!</p>
      </div>
    </main>
  );
}

function HelmetSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#ffb600"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="helmet-svg"
    >
      <path d="M2 40h60L32 2 2 40z" fill="#ffb600" />
      <path d="M16 40v14h32V40" stroke="#fff" strokeWidth="2" />
      <line x1="32" y1="16" x2="32" y2="38" stroke="#fff" strokeWidth="2" />
      <line x1="22" y1="50" x2="42" y2="50" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}
