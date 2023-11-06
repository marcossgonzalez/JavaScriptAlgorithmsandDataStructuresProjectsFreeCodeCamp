//-------------------------------------------
function convertToRoman(num) {
     let arrayMap = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C', 200:'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M', 2000: 'MM', 3000: 'MMM' };    
     console.log(arrayMap[1]);
     let arrayNum = [[],[],[],[]];
     let numberArray = num;
     console.log(typeof numberArray);
     numberArray = Array.from(String(numberArray), Number);
     console.log(typeof numberArray);
     let numLength = numberArray
     console.log(numberArray[1])
     switch(num.length){
        case(1):

        case(numLength == 2):
            for (let i = 0; i<numberArray.length;i++)
            {
                arrayNum[3].push(arrayMap[keys(numberArray[1])])
                console.log(arrayNum[0][3])
            }
            break;
        case(3):
        case(4):    
     }   
    return num;
}
convertToRoman(36);