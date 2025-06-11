import React, { useState } from 'react';

const rutinas = [
  { dia: 'Día 1', ejercicios: ['Caminar 10 minutos', 'Estiramiento de brazos'] },
  { dia: 'Día 2', ejercicios: ['Caminar 15 minutos', 'Estiramiento de cuello'] },
  { dia: 'Día 3', ejercicios: ['Yoga suave', 'Respiración consciente'] },
  { dia: 'Día 4', ejercicios: ['Ejercicio de equilibrio', 'Caminar 10 minutos'] },
  { dia: 'Día 5', ejercicios: ['Tai Chi', 'Estiramiento de piernas'] },
  { dia: 'Día 6', ejercicios: ['Ejercicios con banda', 'Meditación'] },
  { dia: 'Día 7', ejercicios: ['Caminar en la naturaleza', 'Reflexión y descanso'] },
];

const Rutinas = () => {
  const [diaActual, setDiaActual] = useState(0);

  const siguiente = () => {
    setDiaActual((prev) => (prev + 1) % rutinas.length);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{rutinas[diaActual].dia}</h2>
      <ul>
        {rutinas[diaActual].ejercicios.map((ej, i) => (
          <li key={i}>{ej}</li>
        ))}
      </ul>
      <button
        onClick={siguiente}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
      >
        ✅ Siguiente rutina
      </button>
    </div>
  );
};

export default Rutinas;
