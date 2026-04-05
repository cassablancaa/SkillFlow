import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  const goToHome = () => setCurrentPage("home");
  const goToRegister = () => setCurrentPage("register");
  const goToLogin = () => setCurrentPage("login");

  return (
    <div className="app">
      <Navbar
        onHomeClick={goToHome}
        onRegisterClick={goToRegister}
        onLoginClick={goToLogin}
      />

      {currentPage === "home" && <HomePage onRegisterClick={goToRegister} />}
      {currentPage === "register" && (
        <RegisterPage onLoginClick={goToLogin} onHomeClick={goToHome} />
      )}
      {currentPage === "login" && (
        <LoginPage onRegisterClick={goToRegister} onHomeClick={goToHome} />
      )}

      <Footer />
    </div>
  );
}