import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="highlight">Forstner</span>Libras
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/tiktok">TikTok</a>
          <a href="/sinais">Sinais</a>
          <a href="/cursos">Cursos</a>
        </div>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/matheus_forstner/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@matheus.forstner"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            title="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://github.com/MatheusForstner"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-forstner-larangeiro-pcd-2a63901a0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ForstnerLibras. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;