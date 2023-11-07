//--------------------------------------------------
function checkCashRegister(price, cash, cid) {
    let arrayCashInDrawer = cid
    let arrayCashValues = [["PENNY",0.01], ["NICKEL", 0.05], ["DIME", 0.1],["QUARTER", 0.25], ["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00],["ONE HUNDRED", 100.00]]
    console.log(Math.round(arrayCashInDrawer[0][1]/0.01)) //shows quantitie of pennies
    let change = cash - price;
    let returnsIndex = 0;
    let countNow = 0;
    let valueReturn = 0;
    let arrayReturns = []
    console.log(change)
    if (change<1){
        for (let i = 0; i<arrayCashValues.length; i++){
            if(change/arrayCashValues[i][1] >= 1 && i>0){     
                    countNow = change/arrayCashValues[i][1];
                    valueReturn = (arrayCashValues[i][1]*countNow);
                    console.log(valueReturn)
                    arrayCashInDrawer[i][1] -= valueReturn
                    returnsIndex = i
                    }
                    
                    }arrayReturns[0] = (arrayCashValues[returnsIndex][0])
                    arrayReturns[1] = (valueReturn).toFixed(2)

    }console.log(arrayReturns)
    return change;
}
checkCashRegister(19.7, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);