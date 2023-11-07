//--------------------------------------------
//simplier version
function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
        const charCode = char.charCodeAt(0);
        const base = char >= 'A' && char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const rotatedChar = String.fromCharCode((charCode - base + 13) % 26 + base);
        return rotatedChar;
      });
    }
rot13("SERR PBQR PNZC");
//--------------------------------------------
function rot13(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let regex = /[a-zA-Z]/;
    let arrayRot = str;
    let count = 0;
    let stringFinal = '';
    while (count < arrayRot.length) {
        if (arrayRot[count].match(regex)) {
            stringFinal += alphabet[arrayRot[count].replace(arrayRot[count], (alphabet.indexOf(arrayRot[count])) + 13)]
            count++;
        } else {
            stringFinal += arrayRot[count]
            count++;
        }
    } return stringFinal
}

rot13("SERR PBQR PNZC");