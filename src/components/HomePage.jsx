import { useEffect, useRef } from "react";
import "../styles/HomePage.css";

export default function HomePage({ onRegisterClick }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let currentPX = 50;
    let currentPY = 50;
    let targetPX = 50;
    let targetPY = 50;
    let rafId = 0;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      targetX = (x - 0.5) * 48;
      targetY = (y - 0.5) * 36;
      targetPX = x * 100;
      targetPY = y * 100;

      hero.classList.add("is-interactive");
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      targetPX = 50;
      targetPY = 50;
      hero.classList.remove("is-interactive");
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      currentPX += (targetPX - currentPX) * 0.08;
      currentPY += (targetPY - currentPY) * 0.08;

      hero.style.setProperty("--mouse-x", `${currentX}px`);
      hero.style.setProperty("--mouse-y", `${currentY}px`);
      hero.style.setProperty("--pointer-x", `${currentPX}%`);
      hero.style.setProperty("--pointer-y", `${currentPY}%`);
      hero.style.setProperty("--rotate-x", `${currentY * -0.05}deg`);
      hero.style.setProperty("--rotate-y", `${currentX * 0.05}deg`);

      rafId = requestAnimationFrame(animate);
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main className="main-content">
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background" aria-hidden="true">
          <div className="hero-spotlight"></div>
          <div className="hero-light hero-light-left"></div>
          <div className="hero-light hero-light-right"></div>

          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>
          <div className="hero-orbit hero-orbit-three"></div>

          <div className="hero-wave hero-wave-top"></div>
          <div className="hero-wave hero-wave-bottom"></div>

          <div className="hero-connection hero-connection-left"></div>
          <div className="hero-connection hero-connection-right"></div>

          <span className="hero-node hero-node-1"></span>
          <span className="hero-node hero-node-2"></span>
          <span className="hero-node hero-node-3"></span>
          <span className="hero-node hero-node-4"></span>
          <span className="hero-node hero-node-5"></span>
          <span className="hero-node hero-node-6"></span>

          <div className="hero-shimmer"></div>
        </div>

        <div className="container-narrow hero-content">
          <h1 className="hero-title">
            Znajdź partnera do nauki <br />
            <span>w Twojej okolicy</span>
          </h1>

          <p className="hero-description">
            Ucz innych tego, co potrafisz, a oni odwdzięczą się swoją wiedzą.
            Bez pieniędzy, tylko czysta wymiana skilli.
          </p>

          <div className="hero-btns">
            <button className="main-btn" onClick={onRegisterClick}>
              Zacznij już teraz...
            </button>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container-wide">
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📍</div>
              <h3>Lokalnie i Online</h3>
              <p>Filtruj użytkowników po lokalizacji lub ucz się zdalnie.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">⭐</div>
              <h3>System Ocen</h3>
              <p>Buduj profil eksperta dzięki rzetelnym opiniom.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">💬</div>
              <h3>Czat i Kalendarz</h3>
              <p>Umawiaj się na sesje bezpośrednio w aplikacji.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
