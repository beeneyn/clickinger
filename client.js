// your code goes here
let clicks = 0;
let cpc = 1;
let cpcCost = 10;
let mps = 0;
let mpsCost = 50;
let money = 0;


const moneyDisplay = document.getElementById("money");
const clicksDisplay = document.getElementById("clicks");
const mpcDisplay = document.getElementById("mpc");
const mpcCostDisplay = document.getElementById("mpcCost");
const mpsDisplay = document.getElementById("mps");
const mpsCostDisplay = document.getElementById("mpsCost");

function updateDisplay() {
  moneyDisplay.textContent = clicks;
  moneyDisplay.textContent = clicks;
  mpcDisplay.textContent = cpc;
  mpcCostDisplay.textContent = cpcCost;
  mpsDisplay.textContent = mps;
  mpsCostDisplay.textContent = mpsCost;
}

function clickCookie() {
  clicks += cpc; // Increase money by MPC
  updateDisplay();
}

function upgradeMPC() {
  if (clicks >= cpcCost) {
    clicks -= cpcCost;
    cpc++; // Increase MPC
    cpcCost += 10; // Increase cost for next upgrade
    updateDisplay();
  } else {
    alert("Not enough money to upgrade!");
  }
}

function buyMPS() {
  if (money >= mpsCost) {
    money -= mpsCost;
    mps++; // Increase MPS
    mpsCost += 50; // Increase cost for next purchase
    // Automatically add money every second
    setInterval(function() {
      money += mps;
      updateDisplay();
    }, 1000);
    updateDisplay();
  } else {
    alert("Not enough money to buy MPS!");
  }
}

updateDisplay();
