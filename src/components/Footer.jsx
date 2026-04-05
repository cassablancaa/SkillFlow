import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-brand">SkillFlow</span>
          <p>© 2026 Wymieniaj się wiedzą.</p>
        </div>

        <div className="footer-center">
          <a href="#" className="footer-link">
            Kodeks Użytkownika
          </a>
          <a href="#faq" className="footer-link">
            FAQ
          </a>
        </div>

        <div className="footer-right">
          <span className="footer-label">Kontakt:</span>
          <a href="mailto:kontakt@skillflow.pl" className="footer-email">
            kontakt@skillflow.pl
          </a>
        </div>
      </div>
      <div className="footer-bottom-bar" />
    </footer>
  );
}
