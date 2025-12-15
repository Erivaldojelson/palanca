const { useState, useEffect } = React;

function AdminPanel() {
  const [data, setData] = useState({});

  // Carregar dados do localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('palancaData')) || {};
    setData(saved);
  }, []);

  // Atualiza campos de texto, número ou select
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData(prev => ({ ...prev, [id]: value }));
  };

  // Upload de arquivos
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const base64 = await toBase64(file);
    setData(prev => ({ ...prev, [e.target.id]: base64 }));
  };

  // Converte para base64
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = err => reject(err);
  });

  // Salvar dados
  const handleSave = () => {
    localStorage.setItem('palancaData', JSON.stringify(data));
    alert('Alterações salvas com sucesso!');
  };

  // Renderiza input de arquivo customizado
  const FileInput = ({ id, label }) => (
    <div>
      <label className="custom-file-label">{label}</label>
      <input type="file" id={id} onChange={handleFileChange} />
    </div>
  );

  return (
    <div className="p-5">
      <h2>Painel Administrativo Palanca</h2>

      {/* Menu */}
      <section className="admin-section">
        <h4>Menu</h4>
        {["collection","men","women","kids","home","lifestyle"].map(key => (
          <input key={key} id={`menu-${key}`} className="form-control"
            placeholder={key.charAt(0).toUpperCase()+key.slice(1)}
            value={data[`menu-${key}`] || ""} onChange={handleChange} />
        ))}
      </section>

      {/* Hero */}
      <section className="admin-section">
        <h4>Hero</h4>
        <input type="text" id="hero-title" className="form-control"
          placeholder="Título" value={data.hero-title || ""} onChange={handleChange} />
        <input type="text" id="hero-text" className="form-control"
          placeholder="Texto" value={data.hero-text || ""} onChange={handleChange} />
        <FileInput id="hero-image" label="Escolher imagem do Hero" />
      </section>

      {/* Produtos */}
      <section className="admin-section">
        <h4>Produtos</h4>
        {["suit","shirt1","shirt2","coat"].map(key => (
          <div key={key} className="product-input">
            <input type="text" id={`product-${key}`} className="form-control"
              placeholder={`Produto ${key}`} value={data[`product-${key}`] || ""} onChange={handleChange} />
            <FileInput id={`img-${key}`} label="Escolher imagem" />
            <input type="number" id={`price-${key}`} className="form-control"
              placeholder="Preço" value={data[`price-${key}`] || ""} onChange={handleChange} />
            <select id={`currency-${key}`} className="form-control"
              value={data[`currency-${key}`] || "AOA"} onChange={handleChange}>
              <option value="AOA">AOA</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        ))}
      </section>

      {/* Footer */}
      <section className="admin-section">
        <h4>Footer</h4>
        {["service","newsletter","subscribe"].map(key => (
          <input key={key} id={`footer-${key}`} className="form-control"
            placeholder={key.charAt(0).toUpperCase()+key.slice(1)}
            value={data[`footer-${key}`] || ""} onChange={handleChange} />
        ))}
      </section>

      {/* Redes Sociais */}
      <section className="admin-section">
        <h4>Redes Sociais</h4>
        {["facebook","instagram","youtube"].map(key => (
          <div key={key} className="social-input">
            <FileInput id={`social-${key}-icon`} label="Escolher ícone" />
            <input type="text" id={`social-${key}-url`} className="form-control"
              placeholder="URL" value={data[`social-${key}-url`] || ""} onChange={handleChange} />
          </div>
        ))}
      </section>

      <button className="btn-hero" onClick={handleSave}>Salvar Alterações</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AdminPanel />);
