let balance = 0;
const balanceDisplay = document.getElementById('balance');

document.addEventListener('click', () => {
    balance += 1;
    balanceDisplay.textContent = balance;
});
