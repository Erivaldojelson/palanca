'use client';

export default function Navbar() {
  return (
    <nav className="luxury-navbar">
      <div className="brand-row">
        <span className="luxury-brand">PALANCA</span>
      </div>

      <div className="menu-row">
        <ul className="luxury-nav">
          <li>NOSSO / 2025</li>
          <li>Homem</li>
          <li>Mulher</li>
          <li>Crianças</li>
          <li>Casa</li>
          <li>Arte de viver</li>
        </ul>

        <input className="search" placeholder="Pesquisar" />
      </div>
    </nav>
  );
}
