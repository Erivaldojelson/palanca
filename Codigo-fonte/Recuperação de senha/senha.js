function App() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  function goToLogin() {
    window.location.href = "login.html";
  }

  return (
    <>
      <div className="card-clean">
        <h2>Recuperar Acesso</h2>
        <p className="text-muted mb-4">
          Informe seu e-mail para solicitar a liberação.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-dark w-100">
            Enviar
          </button>
        </form>

        <div className="back-login">
          <a href="#" onClick={goToLogin}>
            Voltar ao login
          </a>
        </div>
      </div>

      {sent && (
        <div className="confirm-overlay">
          <div className="confirm-box animate__animated animate__zoomIn">

            {/* ✔️ VISTO ANIMADO */}
            <div
              className="animate__animated animate__bounceIn"
              style={{
                fontSize: "64px",
                color: "#198754",
                marginBottom: "15px"
              }}
            >
              ✓
            </div>

            <h4>E-mail enviado</h4>
            <p className="text-muted mt-2">
              Aguarde a liberação do seu gestor.
            </p>

            <button
              className="btn btn-dark mt-3 w-100"
              onClick={goToLogin}
            >
              Voltar ao login
            </button>

          </div>
        </div>
      )}
    </>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);



