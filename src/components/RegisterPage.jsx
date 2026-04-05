import { useState } from "react";
import { BackIcon, HomeIcon, UserIcon, EyeIcon,LockIcon, EyeOffIcon, RegisterIcon, SettingsIcon,MailIcon, LoginIcon,LogoutIcon, SearchIcon } from "./Icons";
export default function RegisterPage({ onLoginClick, onHomeClick }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Hasło jest wymagane.";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Powtórz hasło.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Hasła muszą być takie same.";
    }

    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Rejestracja OK:", formData);
    }
  };

  return (
    <main className="page-wrapper">
      <div className="form-card">
        <button className="back-link" onClick={onHomeClick}>
          <BackIcon className="back-link-img" />
          <p>Wróć na stronę główną</p>
        </button>

        <h1 className="form-title">Załóż konto</h1>

        <form className="form" onSubmit={handleSubmit}>
          <label className="form-label">
            Email
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </label>

          <label className="form-label">
            Hasło
            <input
              className="form-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="form-error">{errors.password}</span>
            )}
          </label>

          <label className="form-label">
            Powtórz hasło
            <input
              className="form-input"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="form-error">{errors.confirmPassword}</span>
            )}
          </label>

          <button type="submit" className="main-btn form-btn">
            Zarejestruj się
          </button>
        </form>

        <p className="switch-text">
          Masz już konto?{" "}
          <button className="text-button" onClick={onLoginClick}>
            Zaloguj się
          </button>
        </p>
      </div>
    </main>
  );
}