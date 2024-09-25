const plantDatabase = [
    {
        name: "Planta da Sorte",
        scientificName: "Zamioculcas zamiifolia",
        description: "Planta popular por sua resistência e facilidade de cuidados, ideal para ambientes internos.",
        image: "img/zamioculcas.jpg"
    },
    {
        name: "Lírio da Paz",
        scientificName: "Spathiphyllum",
        description: "Conhecida por suas flores brancas, é ótima para purificar o ar e fácil de cuidar.",
        image: "img/spathiphyllum.jpg"
    },
    {
        name: "Pothos",
        scientificName: "Epipremnum aureum",
        description: "Uma planta trepadeira que se adapta bem a diferentes ambientes e é ideal para iniciantes.",
        image: "img/pothos.jpg"
    }
];

document.getElementById('identifyButton').addEventListener('click', identifyPlant);

function identifyPlant() {
    const input = document.getElementById('plantImage');
    const file = input.files[0];

    if (file) {
        // Aqui você pode adicionar a lógica de identificação usando IA e comparação com o banco de dados.
        // Para fins de exemplo, vamos simular a identificação com um resultado aleatório.
        const randomIndex = Math.floor(Math.random() * plantDatabase.length);
        const plant = plantDatabase[randomIndex];
        displayPlantDetails(plant);
    } else {
        alert("Por favor, envie uma imagem da planta.");
    }
}

function displayPlantDetails(plant) {
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `
        <h3>${plant.name} (${plant.scientificName})</h3>
        <img src="${plant.image}" alt="${plant.name}" style="width: 200px;">
        <p>${plant.description}</p>
    `;
}
