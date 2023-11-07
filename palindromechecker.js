//----------------------------------
// simplified version:
function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

const result = palindrome("0_0 (: /-\ :) 0-0");
console.log(result); // true
//----------------------------------
function palindrome(str) {
    let string = str;
    let regex = /[^\W][a-zA-Z]*/gi;
    string = string.match(regex).join('').replace('_', '').toLowerCase();
    let stringLengthEven = (string.length / 2) % 2;
    let stringLength = string.length;
    if (stringLength % 2 != 0) {
        let letterDoubleIndex = Math.floor(stringLength / 2);
        string = Array.from(string);
        string.splice(letterDoubleIndex, 0, string[letterDoubleIndex]);
    }
    string = Array.from(string);
    stringLength = Math.ceil(string.length / 2);
    let firstHalf = string.splice(0, stringLength);
    let secondHalf = (string.splice(-stringLength)).reverse();
    if (JSON.stringify(firstHalf) === JSON.stringify(secondHalf)) {
        return true;
    }
    return false;

}

palindrome("0_0 (: /-\ :) 0-0")