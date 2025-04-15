import { series } from './data.js';
const seriesTable = document.getElementById("seriesTable");
function mostrarSeries() {
    seriesTable.innerHTML = "";
    series.forEach((serie) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTable.appendChild(row);
    });
    const promedio = calcularPromedioTemporadas();
    const promedioRow = document.createElement("tr");
    promedioRow.className = "table-info";
    promedioRow.innerHTML = `
        <td colspan="3"><strong>Seasons average:</strong></td>
        <td><strong>${promedio.toFixed(0)}</strong></td>
    `;
    seriesTable.appendChild(promedioRow);
}
function calcularPromedioTemporadas() {
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / series.length;
}
document.addEventListener("DOMContentLoaded", mostrarSeries);
