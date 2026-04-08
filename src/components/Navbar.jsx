import "../styles/Navbar.css";

export default function Navbar({
  onHomeClick,
  onRegisterClick,
  onLoginClick,
}) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-spacer" />

        <button className="nav-center nav-home-button" onClick={onHomeClick}>
          <img src="/logo.jpg" alt="Logo SkillFlow" className="nav-logo-img" />
          <span className="brand-name">SkillFlow</span>
        </button>

        <div className="nav-right">
          <button className="nav-link" onClick={onRegisterClick}>
            Załóż konto
          </button>
          <button className="nav-link nav-btn-cta" onClick={onLoginClick}>
            Zaloguj się
          </button>
        </div>
      </div>
    </nav>
  );
}
