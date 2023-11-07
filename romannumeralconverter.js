//-------------------------------------------
// simplier version
function convertToRoman(num) {
    const romanNumerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
        const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    
        let result = "";
        let i = 12; // Start with the largest Roman numeral
    
        while (num > 0) {
            if (num >= values[i]) {
                result += romanNumerals[i];
                num -= values[i];
            } else {
                i--;
            }
        }
    
        return result;
    }
//-------------------------------------------    
function convertToRoman(num) {
    let arrayMap1 = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X'};    
    let arrayMap2 = {10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C'};
    let arrayMap3 = {100: 'C',  200:'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000:'M'};
    let arrayMap4 = {1000:'M', 2000: 'MM', 3000: 'MMM'};

    console.log(arrayMap1[1]);
    let arrayNum = [[],[],[],[]];
    let numberArray = num;
    console.log(typeof numberArray);
    numberArray = Array.from(String(numberArray), Number);
    console.log(typeof numberArray);
    let numLength = numberArray.length
    console.log(numLength)
    switch(numLength){
       case(1):
         for (let i = 1; i<=numberArray.length;i++)
           {   
               arrayNum[3].push(arrayMap1[numberArray[0]])
               console.log(arrayNum[3]);
           }
           break;
       case(2):
           for (let i = 1; i<numberArray.length;i++)
           {   
               arrayNum[3].push(arrayMap1[numberArray[1]])
               
           }
           for (let i = 1; i<numberArray.length;i++)
           {   
               arrayNum[2].push(arrayMap2[numberArray[0]+"0"])
               console.log(arrayNum[2],arrayNum[3]);
           }
           break;
       case(3):
       for (let i = 2; i<numberArray.length;i++)
           {   
               arrayNum[3].push(arrayMap1[numberArray[2]])
               
           }
           for (let i = 2; i<numberArray.length;i++)
           {   
               arrayNum[2].push(arrayMap2[numberArray[1]+"0"])
               
           }
           for (let i = 2; i<numberArray.length;i++)
           {   
               arrayNum[1].push(arrayMap3[numberArray[0] + "00"])
               console.log(arrayNum.join(''));
           }
           break;
       case(4):
           for (let i = 3; i<numberArray.length;i++)
           {   
               arrayNum[3].push(arrayMap1[numberArray[3]])
               
           }
           for (let i = 3; i<numberArray.length;i++)
           {   
               arrayNum[2].push(arrayMap2[numberArray[2]+"0"])
               
           }
           for (let i = 3; i<numberArray.length;i++)
           {   
               arrayNum[1].push(arrayMap3[numberArray[1] + "00"])
               
           }
           for (let i = 3; i<numberArray.length;i++)
           {   
               arrayNum[0].push(arrayMap4[numberArray[0] + "000"])
               console.log(arrayNum[0],arrayNum[1],arrayNum[2],arrayNum[3]).join('');
           }
           break;
    }   
   return num;
}
convertToRoman(3);