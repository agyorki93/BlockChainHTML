// main.js

const { Blockchain, Block, Data } = require('./blockchain');
const { saveData } = require('./formHandler');
const SHA256 = require('crypto-js/sha256');

const blockchain = new Blockchain();

document.querySelector('#registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Az üres űrlap beküldésének megakadályozása
    saveData(event);

    // Frissítjük a megjelenített adatokat
    updateDataContainer();
});

function updateDataContainer() {
    const dataContainer = document.getElementById('data-container');
    const latestBlock = blockchain.getLatestBlock();

    // Ha van legújabb blokk, és van hash érték, akkor megjelenítjük
    if (latestBlock && latestBlock.hash) {
        dataContainer.innerHTML = `
            <h2>Legutóbbi blokk adatai</h2>
            <p>Időbélyeg: ${latestBlock.timestamp}</p>
            <p>Hash: ${latestBlock.hash}</p>
        `;
    } else {
        dataContainer.innerHTML = '<p></p>';
    }
}
