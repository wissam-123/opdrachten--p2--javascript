// Variabelen voor saldo en UI-elementen
let balance = 0;
const balanceElement = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const historyList = document.getElementById("history-list");

// Functie voor het bijwerken van het saldo en weergave
function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

// Functie voor het bijwerken van de transactiegeschiedenis
function updateTransactionHistory(type, amount) {
    const listItem = document.createElement("li");
    listItem.textContent = `${type}: ${amount.toFixed(2)} euro`;
    historyList.appendChild(listItem);
}

// Functie voor storten van geld
function deposit() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Ongeldig bedrag voor storting.");
        return;
    }

    balance += amount;
    updateBalance();
    updateTransactionHistory("Storting", amount);
}

// Functie voor opnemen van geld
function withdraw() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Ongeldig bedrag voor opname.");
        return;
    }

    if (amount > balance) {
        alert("Saldo ontoereikend voor opname.");
        return;
    }

    balance -= amount;
    updateBalance();
    updateTransactionHistory("Opname", amount);
}
