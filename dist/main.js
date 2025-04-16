import { series } from './data.js';
const seriesTable = document.getElementById("seriesTable");
const serieDetail = document.getElementById("serieDetail");
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
        row.addEventListener("click", () => mostrarDetalle(serie));
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
function mostrarDetalle(serie) {
    serieDetail.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${serie.imageUrl || `https://via.placeholder.com/300x150?text=${serie.name}`}" 
                 class="card-img-top" 
                 alt="${serie.name}"
                 onerror="this.src='https://via.placeholder.com/300x150?text=Imagen+no+disponible'">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text"><strong>Channel:</strong> ${serie.channel}</p>
                <p class="card-text"><strong>Seasons:</strong> ${serie.seasons}</p>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.website || '#'}" 
                   target="_blank" 
                   class="btn btn-primary mt-2">
                   Official Website
                </a>
            </div>
        </div>
    `;
}
function calcularPromedioTemporadas() {
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / series.length;
}
document.addEventListener("DOMContentLoaded", mostrarSeries);
