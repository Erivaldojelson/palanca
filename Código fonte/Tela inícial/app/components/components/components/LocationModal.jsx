'use client';

export default function LocationModal({ onClose, onSave }) {
  function save() {
    const value = 'Brasil • Português';
    localStorage.setItem('location', value);
    onSave(value);
    onClose();
  }

  return (
    <div className="location-modal">
      <div className="location-box">
        <select>
          <option>Brasil</option>
          <option>Angola</option>
          <option>Portugal</option>
        </select>

        <select>
          <option>Português</option>
          <option>English</option>
        </select>

        <button onClick={save}>Salvar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}
