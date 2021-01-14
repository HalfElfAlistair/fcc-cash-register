function checkCashRegister(price, cash, cid) {
  let changeDue = parseFloat(cash - price).toFixed(2);
  const changeRequest = changeDue;
  let changeArray = [];
  let cashInDrawer = cid.reverse();
  let cidArray = [];
  let result = {status: "", change: []};
  let finalChange = [];
  const baseCIDArray = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]].reverse();


  for (let i = 0; i < cid.length; i++) {
    cidArray.push(cashInDrawer[i][1]);
  }

  let cidTotal = cidArray.reduce((a, b) => a + b, 0);


for (let i = 0; i < cashInDrawer.length; i++) {
const currencyTypeName = cashInDrawer[i][0];
const baseCurrencyValue = baseCIDArray[i][1];
const indexCurrencyTotal = cashInDrawer[i][1];
let indexCurrencyAmount = (indexCurrencyTotal / baseCurrencyValue).toFixed(2);
let changeCounter = 0;

while ((changeDue >= baseCurrencyValue) && (indexCurrencyAmount > 0)) {
  changeDue -= baseCurrencyValue;
  changeDue = changeDue.toFixed(2);
  indexCurrencyAmount--;
  changeCounter++;
}

if (changeCounter > 0) {
  changeArray.push([currencyTypeName, changeCounter * baseCurrencyValue]);
}
}

for (let i = 0; i < changeArray.length; i++) {
  finalChange.push(changeArray[i][1]);
}

let finalChangeTotal = finalChange.reduce((a, b) => a + b, 0);

  if ((cidTotal < changeRequest) || (finalChangeTotal < changeRequest)) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  } else if (cidTotal == changeRequest) {
    result.status = "CLOSED";
    result.change = [...cid.reverse()];
  } else {
    result.status = "OPEN";
    result.change = [...changeArray];
  }

return result;

}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);