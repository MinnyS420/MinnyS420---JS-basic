let url = 'https://swapi.dev/api/planets/?page=1';

function getFirstPagePlanets() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const planets = data.results;
            const tbody = document.getElementById('planets-tbody');
            tbody.innerHTML = '';
            for (let planet of planets) {
                const row = document.createElement('tr');
                row.innerHTML = `
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
          `;
                tbody.appendChild(row);
            }
        });
       

}

const button = document.getElementById('first-page-button');
button.addEventListener('click', getFirstPagePlanets);
