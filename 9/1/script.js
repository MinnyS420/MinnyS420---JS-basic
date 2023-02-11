import planet1 from "./planets/planets.js";

const planetsContainer = document.getElementById(`planetsContainer`);

let ourBtn = document.getElementById(`btn`);
ourBtn.addEventListener("click", getPlanets);

function getPlanets() {
    fetch("https://swapi.dev/api/planets/?page=1")
        .then((response) => {response.json()
                .then((serverInfo) => {console.log(serverInfo);

                    for (let i = 0; i < serverInfo.results.length; i++) {
                        const data = serverInfo.results[i];
                        planetsContainer.innerHTML += planet1(data);
                    }
                })
        })

}

