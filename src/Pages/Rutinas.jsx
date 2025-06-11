import React, { useState } from 'react';

const rutinas = [
  {
    dia: 'Day 1 – Gentle Mobility',
    ejercicios: [
      '🔹 Warm-Up March – March in place, swinging arms lightly (3–5 minutes)',
      '🔹 Heel Raises – Stand tall, lift heels slowly (2 sets of 10 reps)',
      '🔹 Side Leg Lift – Hold a chair, lift one leg to the side (2 sets of 8 per side)',
      '🔹 Bird Dog – Standing or on all fours, extend opposite limbs (2 sets of 8 per side)'
    ]
  },
  {
    dia: 'Day 2 – Balance & Core',
    ejercicios: [
      '🔹 Heel-to-Toe Walk (2 sets of 8 steps)',
      '🔹 Seated Knee Lifts (2 sets of 10 reps per leg)',
      '🔹 Standing Side Bends (2 sets of 8 reps each side)',
      '🔹 Seated Torso Twists (1 set of 10 reps per direction)'
    ]
  },
  {
    dia: 'Day 3 – Strength & Stability',
    ejercicios: [
      '🔹 Chair Squats (2 sets of 8 reps)',
      '🔹 Wall Push-Ups (2 sets of 10 reps)',
      '🔹 Standing Calf Raises (2 sets of 10 reps)',
      '🔹 Overhead Arm Raises with Bottles (2 sets of 8 reps)'
    ]
  },
  {
    dia: 'Day 4 – Mobility & Coordination',
    ejercicios: [
      '🔹 Ankle Circles (1 set of 10 circles per direction, each foot)',
      '🔹 Cross-Body Arm Reaches (2 sets of 10 reps)',
      '🔹 Step & Tap (2 sets of 8 per leg)',
      '🔹 Finger-to-Nose Touch (2 sets of 6 each side)'
    ]
  },
  {
    dia: 'Day 5 – Posture & Breathing',
    ejercicios: [
      '🔹 Wall Posture Hold (2 sets of 30 seconds)',
      '🔹 Shoulder Rolls (2 sets of 10 each direction)',
      '🔹 Chest Opener Stretch (Hold 20s, 2 reps)',
      '🔹 Diaphragmatic Breathing (5 slow, deep breaths)'
    ]
  },
  {
    dia: 'Day 6 – Flexibility & Flow',
    ejercicios: [
      '🔹 Neck Tilts & Turns (2 sets of 5 each)',
      '🔹 Seated Forward Bend (2 reps of 20s hold)',
      '🔹 Standing Arm Circles (2 sets of 10 each direction)',
      '🔹 Side-Lying Leg Stretch (Hold 20s per side)'
    ]
  },
  {
    dia: 'Day 7 – Recovery & Relaxation',
    ejercicios: [
      '🔹 Seated Shoulder Rolls + Breathing (2 sets of 10 rolls + 5 breaths)',
      '🔹 Knees-to-Chest (2 reps of 20 seconds)',
      '🔹 Wrist & Finger Mobility (2 sets of 10 each)',
      '🔹 Guided Stillness (2–3 minutes in silence)'
    ]
  }
];

const Rutinas = () => {
  const [diaActual, setDiaActual] = useState(0);

  const siguiente = () => {
    if (diaActual < rutinas.length - 1) {
      setDiaActual(diaActual + 1);
    } else {
      alert('🎉 ¡Felicidades, completaste los 7 días!');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{rutinas[diaActual].dia}</h2>
      <ul>
        {rutinas[diaActual].ejercicios.map((ej, i) => (
          <li key={i}>{ej}</li>
        ))}
      </ul>
      <button onClick={siguiente} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        ✅ Siguiente rutina
      </button>
    </div>
  );
};

export default Rutinas;
