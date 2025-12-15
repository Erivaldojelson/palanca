'use client';
import { useState, useEffect } from 'react';
import LocationModal from './LocationModal';

export default function Footer() {
  const [location, setLocation] = useState("Brasil • Inglês");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("location");
    if (saved) setLocation(saved);
  }, []);

  return (
    <>
      <footer className="luxury-footer">
        <span>{location}</span><br />
        <a onClick={() => setOpen(true)}>Mudar sua localização</a>
      </footer>

      {open && (
        <LocationModal
          onClose={() => setOpen(false)}
          onSave={setLocation}
        />
      )}
    </>
  );
}

