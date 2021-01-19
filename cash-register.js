function checkCashRegister() {
  let price = document.getElementById("price").value;
  let cash = document.getElementById("cash").value;
  let changeDue = parseFloat(cash - price).toFixed(2);
  const changeRequest = changeDue;
  let changeArray = [];
  let finalChange = [];
  let pennyValue = document.getElementById("penny").value;
  let nickelValue = document.getElementById("nickel").value;
  let dimevalue = document.getElementById("dime").value;
  let quarterValue = document.getElementById("quarter").value;
  let oneValue = document.getElementById("one").value;
  let fiveValue = document.getElementById("five").value;
  let tenValue = document.getElementById("ten").value;
  let twentyValue = document.getElementById("twenty").value;
  let oneHundredValue = document.getElementById("one-hundred").value;
  const currencyNames = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"]
  let combinedValue = [pennyValue, nickelValue, dimevalue, quarterValue, oneValue, fiveValue, tenValue, twentyValue, oneHundredValue];
  const baseCIDArray = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]].reverse();
  let nameValueCombo = [];
  let cid = [];
  let cidTotal = combinedValue.reduce((a, b) => +a + +b, 0);
  const errorMessage = "Invalid currency value, please correct and re-submit.";
  let cidArray = [];

  for (let i = 0; i < combinedValue.length; i++) {
    nameValueCombo.push(currencyNames[i]);
    nameValueCombo.push(combinedValue[i]);
  }

  for (let i = 0; i < nameValueCombo.length; i) {
    cid.push(nameValueCombo.splice(i, 2))
  }

  let cashInDrawer = cid.reverse();


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


  if ((/^\d*(\.\d{0,2})?$/.test(price) == false ) ||
      (/^\d*(\.\d{0,2})?$/.test(cash) == false ) ||
      (/^\d*(\.\d{0,2})?$/.test(pennyValue) == false ) ||
      (/^\d*(\.\d([0|5])?)?$/.test(nickelValue) == false ) ||
      (/^\d*(\.\d)?([0])?$/.test(dimevalue) == false ) ||
      (/^\d*(\.([0]|[0][0]|[2][5]|[5]|[5][0]|[7][5]))?$/.test(quarterValue) == false ) ||
      (/^\d*(\.[0]{0,2})?$/.test(oneValue) == false ) ||
      (/^\d*([0|5])(\.[0]{0,2})?$/.test(fiveValue) == false ) ||
      (/^\d*([0])(\.[0]{0,2})?$/.test(tenValue) == false ) ||
      (/^(\d*([0][0]|[2][0]|[4][0]|[6][0]|[8][0])|0)(\.[0]{0,2})?$/.test(twentyValue) == false ) ||
      (/^(\d*(0{2,})|0)(\.[0]{0,2})?$/.test(oneHundredValue) == false )) {
    document.getElementById("result").innerHTML = errorMessage;
  } else if ((cidTotal < changeRequest) || (finalChangeTotal < changeRequest)) {
    document.getElementById("result").innerHTML = '&#123;' + 'Status: ' + '"INSUFFICIENT_FUNDS", ' + 'Change: ' + '[]' + '&#125;';
  } else if (cidTotal == changeRequest) {
    document.getElementById("result").innerHTML = '&#123;' + 'Status: ' + '"CLOSED", ' + 'Change: ' + `[${cid}]` + '&#125;';
  } else {
    document.getElementById("result").innerHTML = '&#123;' + 'Status: ' + '"OPEN", ' + 'Change: ' + `[${changeArray}]` + '&#125;';
  }

}



'&#123;' + 'Status: ' + '"OPEN", ' + 'Change: ' + `[${changeArray}]` + '&#125;';

// "Status: OPEN, Change: " + `[${changeArray}]`;