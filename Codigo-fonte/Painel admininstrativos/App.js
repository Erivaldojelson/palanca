import React, { useState, useEffect } from "react";
import "./App.css";

const initialData = {
  menuCollection: "",
  menuMen: "",
  menuWomen: "",
  menuKids: "",
  menuHome: "",
  menuLifestyle: "",
  heroTitle: "",
  heroText: "",
  heroImage: null,
  products: [
    { name: "Fato Palanca", price: "", currency: "AOA", image: null },
    { name: "Camisola NOSSO", price: "", currency: "AOA", image: null },
    { name: "Camisola Cinza", price: "", currency: "AOA", image: null },
    { name: "Casaco NOSSO", price: "", currency: "AOA", image: null },
  ],
  footerService: "",
  footerNewsletter: "",
  footerSubscribe: "",
  social: {
    facebook: { icon: null, url: "" },
    instagram: { icon: null, url: "" },
    youtube: { icon: null, url: "" },
  },
};

function App() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const saved = localStorage.getItem("palancaData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  const handleChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleProductChange = (index, field, value) => {
    const newProducts = [...data.products];
    newProducts[index][field] = value;
    setData({ ...data, products: newProducts });
  };

  const handleSocialChange = (platform, field, value) => {
    const newSocial = { ...data.social };
    newSocial[platform][field] = value;
    setData({ ...data, social: newSocial });
  };

  const handleFile = async (e, field, index = null, platform = null) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      if (field === "products" && index !== null) {
        handleProductChange(index, "image", reader.result);
      } else if (field === "heroImage") {
        handleChange("heroImage", reader.result);
      } else if (field === "social" && platform) {
        handleSocialChange(platform, "icon", reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const saveData = () => {
    localStorage.setItem("palancaData", JSON.stringify(data));
    alert("Alterações salvas com sucesso!");
  };

  return (
    <div className="app">
      <h2>Painel Administrativo Palanca</h2>

      {/* Menu */}
      <div className="admin-section">
        <h4>Menu</h4>
        {["Collection","Men","Women","Kids","Home","Lifestyle"].map((label, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={label}
            value={Object.values(data).slice(0,6)[idx]}
            onChange={(e) =>
              handleChange(Object.keys(data).slice(0,6)[idx], e.target.value)
            }
            className="form-control"
          />
        ))}
      </div>

      {/* Hero */}
      <div className="admin-section">
        <h4>Hero</h4>
        <input
          type="text"
          placeholder="Título"
          value={data.heroTitle}
          onChange={(e) => handleChange("heroTitle", e.target.value)}
          className="form-control"
        />
        <input
          type="text"
          placeholder="Texto"
          value={data.heroText}
          onChange={(e) => handleChange("heroText", e.target.value)}
          className="form-control"
        />
        <label className="custom-file-label">
          Escolher Imagem do Hero
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e, "heroImage")}
          />
        </label>
      </div>

      {/* Produtos */}
      <div className="admin-section">
        <h4>Produtos</h4>
        {data.products.map((product, idx) => (
          <div key={idx} className="product-input">
            <input
              type="text"
              placeholder={product.name}
              value={product.name}
              onChange={(e) =>
                handleProductChange(idx, "name", e.target.value)
              }
              className="form-control"
            />
            <input
              type="number"
              placeholder="Preço"
              value={product.price}
              onChange={(e) =>
                handleProductChange(idx, "price", e.target.value)
              }
              className="form-control"
            />
            <select
              value={product.currency}
              onChange={(e) =>
                handleProductChange(idx, "currency", e.target.value)
              }
              className="form-control"
            >
              <option value="AOA">AOA</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <label className="custom-file-label">
              Escolher Foto
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFile(e, "products", idx)}
              />
            </label>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="admin-section">
        <h4>Footer</h4>
        <input
          type="text"
          placeholder="Atendimento"
          value={data.footerService}
          onChange={(e) => handleChange("footerService", e.target.value)}
          className="form-control"
        />
        <input
          type="text"
          placeholder="Newsletter"
          value={data.footerNewsletter}
          onChange={(e) => handleChange("footerNewsletter", e.target.value)}
          className="form-control"
        />
        <input
          type="text"
          placeholder="Inscreva-se"
          value={data.footerSubscribe}
          onChange={(e) => handleChange("footerSubscribe", e.target.value)}
          className="form-control"
        />
      </div>

      {/* Redes Sociais */}
      <div className="admin-section">
        <h4>Redes Sociais</h4>
        {["facebook","instagram","youtube"].map((platform, idx) => (
          <div className="social-input" key={idx}>
            <label>{platform.charAt(0).toUpperCase()+platform.slice(1)}</label>
            <label className="custom-file-label">
              Escolher ícone
              <input
                type="file"
                accept="image/png, image/svg+xml"
                onChange={(e) => handleFile(e, "social", null, platform)}
              />
            </label>
            <input
              type="text"
              placeholder="URL"
              value={data.social[platform].url}
              onChange={(e) => handleSocialChange(platform, "url", e.target.value)}
              className="form-control"
            />
          </div>
        ))}
      </div>

      <button id="save-btn" onClick={saveData}>Salvar Alterações</button>
    </div>
  );
}

export default App;
