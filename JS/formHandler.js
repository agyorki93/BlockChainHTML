// formHandler.js

const { Blockchain, Block, Transaction } = require('./blockchain');

// Új blockchain példány létrehozása
const blockchain = new Blockchain();

function saveData(event) {  
    event.preventDefault();
    const day = document.querySelector('.day').value;
    const month = document.querySelector('.month').value;
    const year = document.querySelector('input[name="year"]').value;

    const name = document.querySelector('input[name="name"]').value;
    const street = document.querySelector('input[name="street"]').value;
    const city = document.querySelector('input[name="city"]').value;
    const country = document.querySelector('#country').value;
    const idCard = document.querySelector('input[name="idCard"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const birthdate = `${day}/${month}/${year}`;
    const nationality = document.querySelector('select[name="nationality"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phoneNumber = document.querySelector('input[name="phone"]').value;

    const data = new Transaction(name, street, city, country, idCard, gender, birthdate, nationality, email, phoneNumber);
    const dataHash = data.calculateHash();

    const block = new Block(Date.now(), data, dataHash, blockchain.getLatestBlock().hash);
    blockchain.addBlock(block);

    displayBlock(block);
}

function displayBlock(block) {
    const dataContainer = document.getElementById('data-container');

    const blockDiv = document.createElement('div');
    blockDiv.classList.add('block');

    const timestamp = document.createElement('p');
    timestamp.textContent = `Timestamp: ${block.timestamp}`;

    const data = document.createElement('p');
    data.textContent = `Data Hash: ${block.hash}`;

    const previousHash = document.createElement('p');
    previousHash.textContent = `Previous Hash: ${block.previousHash}`;

    blockDiv.appendChild(timestamp);
    blockDiv.appendChild(data);
    blockDiv.appendChild(previousHash);

    dataContainer.appendChild(blockDiv);
}

module.exports = {
    saveData
};
