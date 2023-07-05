// Datos de ejemplo
const playerData = [
  { name: 'Juan Perez', hits: 30, atBats: 100 },
  { name: 'Maria Garcia', hits: 40, atBats: 120 },
];

const pitcherData = [
  { name: 'Pedro Martinez', earnedRuns: 15, inningsPitched: 50 },
  { name: 'Carlos Gonzalez', earnedRuns: 10, inningsPitched: 40 },
];

const teamData = [
  { name: 'Equipo A', hits: 100, atBats: 300 },
  { name: 'Equipo B', hits: 120, atBats: 350 },
];

// Función para calcular el promedio
function calculateAverage(hits, atBats) {
  const average = hits / atBats;
  return average.toFixed(3); // Redondear a tres decimales
}

// Función para actualizar la tabla de jugadores
function updatePlayerTable() {
  const playerTable = document.querySelector('#player-data');

  // Limpiar la tabla
  playerTable.innerHTML = '';

  // Agregar los datos de cada jugador a la tabla
  playerData.forEach((player) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const averageCell = document.createElement('td');

    nameCell.textContent = player.name;
    averageCell.textContent = calculateAverage(player.hits, player.atBats);

    row.appendChild(nameCell);
    row.appendChild(averageCell);

    playerTable.appendChild(row);
  });
}

// Función para actualizar la tabla de pitchers
function updatePitcherTable() {
  const pitcherTable = document.querySelector('#pitcher-data');

  // Limpiar la tabla
  pitcherTable.innerHTML = '';

  // Agregar los datos de cada pitcher a la tabla
  pitcherData.forEach((pitcher) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const averageCell = document.createElement('td');

    nameCell.textContent = pitcher.name;
    averageCell.textContent = pitcher.earnedRuns / pitcher.inningsPitched;

    row.appendChild(nameCell);
    row.appendChild(averageCell);

    pitcherTable.appendChild(row);
  });
}

// Función para actualizar la tabla de equipos
function updateTeamTable() {
  const teamTable = document.querySelector('#team-data');

  // Limpiar la tabla
  teamTable.innerHTML = '';

  // Agregar los datos de cada equipo a la tabla
  teamData.forEach((team) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const averageCell = document.createElement('td');

    nameCell.textContent = team.name;
    averageCell.textContent = calculateAverage(team.hits, team.atBats);

    row.appendChild(nameCell);
    row.appendChild(averageCell);

    teamTable.appendChild(row);
  });
}

// Llamar a las funciones para actualizar las tablas
updatePlayerTable();
updatePitcherTable();
updateTeamTable();
