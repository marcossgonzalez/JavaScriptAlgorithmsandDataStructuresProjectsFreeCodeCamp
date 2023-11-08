//--------------------------------------------------
function checkCashRegister(price, cash, cid) {
    var changeDue = 100 * (cash - price);
    var currencyUnits = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    var changeToGive = [];
  
    for (var i = cid.length - 1; i >= 0; i--) {
      var unitChange = 0;
      while (currencyUnits[i] <= changeDue && cid[i][1] > 0 && changeDue > 0) {
        cid[i][1] -= currencyUnits[i] / 100;
        changeDue -= currencyUnits[i];
        unitChange += currencyUnits[i] / 100;
      }
      if (unitChange !== 0) {
        changeToGive.push([cid[i][0], unitChange]);
      }
    }
    if (changeDue < 0) {
        return "Open";
      }
    if (changeDue !== 0) {
      return '{status: "INSUFFICIENT_FUNDS",';
    }
  
    var result;
if (changeDue <= 0) {
  result = { status: "OPEN", change: changeToGive };
} else if (changeDue > 0) {
  result = '{ status: "INSUFFICIENT_FUNDS", change:', changeToGive, '}';
} else {
  result = { status: "CLOSED", change: changeToGive };
}
result = JSON.stringify(result);
result = result.replace(/"status":/g, 'status: ');
result = result.replace(/"change":/g, 'change: ');
return result;}
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));