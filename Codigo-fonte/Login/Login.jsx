import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@palanca.com" && password === "123456") {
      setMessage("Login realizado com sucesso!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    } else {
      setMessage("Usuário ou senha incorretos.");
    }
  };

  const handleForgotPassword = () => {
    const recoveryEmail = prompt("Digite seu email para recuperar a senha:");
    if (recoveryEmail) {
      alert(
        `Se o email ${recoveryEmail} estiver cadastrado, você receberá instruções para redefinir sua senha.`
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Palanca Admin</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
          <button type="submit" className="btn-login">
            Login
          </button>
          <p className="forgot-password">
            <a href="#" onClick={handleForgotPassword}>
              Esqueci minha senha
            </a>
          </p>
          {message && <p className="login-message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
