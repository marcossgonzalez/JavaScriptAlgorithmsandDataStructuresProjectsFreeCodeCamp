//----------------------------------
function palindrome(str) {
    let string = str;
    console.log(string);
    let regex = /[^\W][a-zA-Z]*/gi;
    string = string.match(regex).join('').replace('_','');
    for (let i = 0)
    console.log(string);
    return true;
}

palindrome("0_0 (: /-\ :) 0-0")