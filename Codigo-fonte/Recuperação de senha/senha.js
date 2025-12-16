function Login({ onRecover }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "admin@palanca.com" && password === "123456") {
      setMessage("Login realizado com sucesso!");
    } else {
      setMessage("Usuário ou senha incorretos.");
    }
  }

  return (
    <div className="card-clean">
      <h2>Palanca Admin</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-dark w-100">Login</button>
      </form>

      <div className="back-login mt-3">
        <a href="#" onClick={onRecover}>
          Esqueci minha senha
        </a>
      </div>

      {message && <p className="text-success mt-3">{message}</p>}
    </div>
  );
}

function Recover({ onBack }) {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
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

          <button className="btn btn-dark w-100">Enviar</button>
        </form>

        <div className="back-login">
          <a href="#" onClick={onBack}>
            Voltar ao login
          </a>
        </div>
      </div>

      {sent && (
        <div className="confirm-overlay">
          <div className="confirm-box animate__animated animate__zoomIn">

            <div
              className="animate__animated animate__bounceIn"
              style={{ fontSize: "64px", color: "#198754" }}
            >
              ✓
            </div>

            <h4>E-mail enviado</h4>
            <p className="text-muted">
              Aguarde a liberação do seu gestor.
            </p>

            <button
              className="btn btn-dark w-100 mt-3"
              onClick={onBack}
            >
              Voltar ao login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  const [screen, setScreen] = React.useState("login");

  return (
    <>
      {screen === "login" && (
        <Login onRecover={() => setScreen("recover")} />
      )}

      {screen === "recover" && (
        <Recover onBack={() => setScreen("login")} />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


