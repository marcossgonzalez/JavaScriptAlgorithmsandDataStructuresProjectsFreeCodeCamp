//----------------------------------
function palindrome(str) {
    let string = str;
    console.log(string);
    let regex = /[^\W][a-zA-Z]*/gi;
    string = string.match(regex).join('').replace('_','').toLowerCase();
    let stringLengthEven = (string.length/2) % 2;
    let stringLength = string.length;
    console.log(stringLength);
    if(stringLength % 2 != 0){
        let letterDoubleIndex = Math.floor(stringLength/2);
        string = string.split('');
        console.log(string);
        string.splice(letterDoubleIndex, 0, string[letterDoubleIndex]);
        console.log(string);
    }
    stringLength = Math.ceil(string.length/2);
    console.log(stringLength)
    let firstHalf = string.splice(0, stringLength);
    let secondHalf = (string.splice(-stringLength)).reverse();
    console.log(firstHalf)
    console.log(secondHalf)
    
    return true;
}

palindrome("eye")