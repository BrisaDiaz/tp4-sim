// utils/timeFormatter.js (puedes crear este archivo o poner la función directamente en ResultadosSimulacion.jsx)

export const formatHoursToHHMMSS = (hours) => {
  if (typeof hours !== "number" || isNaN(hours)) {
    return "-"; // O cualquier valor por defecto para no-números
  }

  // Asegúrate de que el número sea positivo para evitar problemas con Math.floor
  const totalSeconds = Math.round(hours * 3600); // Convertir horas a segundos y redondear

  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  // Función para agregar un cero inicial si el número es menor a 10
  const pad = (num) => num.toString().padStart(2, "0");

  return `${pad(h)}:${pad(m)}:${pad(s)}`;
};
