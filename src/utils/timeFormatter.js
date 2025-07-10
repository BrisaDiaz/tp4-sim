export const formatHoursToHHMMSS = (hours) => {
  if (typeof hours !== 'number' || isNaN(hours) || hours < 0) {
    return '-'; // Retorna "-" para valores no numéricos, NaN o negativos
  }

  // Redondear al segundo más cercano antes de la conversión
  const totalSeconds = Math.round(hours * 3600);

  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  const pad = (num) => num.toString().padStart(2, '0');

  return `${pad(h)}:${pad(m)}:${pad(s)}`;
};
