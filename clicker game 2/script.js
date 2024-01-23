let score = 0;
let clickPower = 1;
let doubleClickUpgradeCost = 10;
let scorePointUpgradeCost = 1;

const moonClicker = document.querySelector('.aard-clicker');
const scoreDisplay = document.getElementById('score');
const doubleClickUpgradeButton = document.querySelector('.double-click-upgrade');
const scorePointUpgradeButton = document.querySelector('.score-point-upgrade');

moonClicker.addEventListener('click', function() {
    score += clickPower;
    updateScore();
});

doubleClickUpgradeButton.addEventListener('click', function() {
    if (score >= doubleClickUpgradeCost) {
        score -= doubleClickUpgradeCost;
        clickPower *= 2;
        doubleClickUpgradeCost *= 2; 
        updateScore();
        updateUpgradeButtonText();
    } else {
        alert("Not enough score to buy the upgrade!");
    }
});

scorePointUpgradeButton.addEventListener('click', function() {
    if (score >= scorePointUpgradeCost) {
        score -= scorePointUpgradeCost;
        clickPower += 1;
        scorePointUpgradeCost *= 2; 
        updateScore();
        updateUpgradeButtonText();
    } else {
        alert("Not enough score to buy the upgrade!");
    }
});

function updateScore() {
    scoreDisplay.textContent = score;
}

function updateUpgradeButtonText() {
    doubleClickUpgradeButton.textContent = `Double Click Power (Cost: ${doubleClickUpgradeCost})`;
    scorePointUpgradeButton.textContent = `Increase Click Power (Cost: ${scorePointUpgradeCost})`;
}

updateScore();
updateUpgradeButtonText();
