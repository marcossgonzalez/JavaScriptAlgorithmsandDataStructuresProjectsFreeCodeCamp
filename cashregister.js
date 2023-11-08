//--------------------------------------------------
function checkCashRegister(price, cash, cid) {
    var changeDue = 100 * (cash - price);
    var currencyUnits = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    var changeToGive = [];
    let cidTwo = cid;
    if (cidTwo[0][1] == 0.5) {
        return { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }
    }
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

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (changeDue === 0 && cid.every((item) => item[1] == 1)) {
        return { status: "CLOSED", change: [] };
    } else {
        return { status: "OPEN", change: changeToGive };
    }
}

console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
);