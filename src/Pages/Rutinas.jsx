import React from 'react';

const rutinas = [
  {
    dia: "Día 01",
    ejercicios: [
      "10 minutos de caminata suave",
      "Estiramientos de cuello y hombros (5 repeticiones)",
      "Elevación de piernas sentado (3 series de 10)",
      "Respiración profunda 3 minutos"
    ]
  },
  {
    dia: "Día 02",
    ejercicios: [
      "15 minutos de caminata",
      "Estiramiento de brazos y espalda (5 repeticiones)",
      "Sentadillas suaves (3 series de 5)",
      "Ejercicio de equilibrio (10 segundos por pierna)"
    ]
  },
  {
    dia: "Día 03",
    ejercicios: [
      "10 minutos de baile libre con música",
      "Giros de cintura (10 repeticiones)",
      "Marcha en el sitio (3 series de 1 minuto)",
      "Relajación guiada (5 minutos)"
    ]
  },
  {
    dia: "Día 04",
    ejercicios: [
      "Caminata al aire libre o interior (20 minutos)",
      "Estiramiento de cuello y hombros",
      "Movilidad de muñecas y tobillos",
      "Respiración consciente (3 minutos)"
    ]
  },
  {
    dia: "Día 05",
    ejercicios: [
      "Ejercicio de brazos con botellas de agua (3 series de 10)",
      "Movilidad articular general",
      "Marcha lateral (3 series de 30 segundos)",
      "Estiramiento y respiración"
    ]
  },
  {
    dia: "Día 06",
    ejercicios: [
      "15 minutos de caminata",
      "Elevación de talones (3 series de 10)",
      "Ejercicio de coordinación (palmas y rodillas alternadas)",
      "Relajación con música suave"
    ]
  },
  {
    dia: "Día 07",
    ejercicios: [
      "Caminata libre",
      "Yoga suave (posición de la montaña, respiración profunda)",
      "Movilidad articular",
      "Agradecimiento: 3 respiraciones conscientes con gratitud"
    ]
  }
];

const Rutinas = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>🧘 Rutinas Semanales</h1>
      <p>Explora tu rutina diaria de bienestar. Haz clic en "Iniciar rutina" para comenzar.</p>

      {rutinas.map((rutina, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem', paddingBottom: '1rem' }}>
          <h2>{rutina.dia}</h2>
          <ul>
            {rutina.ejercicios.map((ejercicio, idx) => (
              <li key={idx}>✅ {ejercicio}</li>
            ))}
          </ul>
          <button
            style={{
              marginTop: '0.5rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => alert(`¡Has comenzado la rutina del ${rutina.dia}!`)}
          >
            ▶ Iniciar rutina
          </button>
        </div>
      ))}
    </div>
  );
};

export default Rutinas;
