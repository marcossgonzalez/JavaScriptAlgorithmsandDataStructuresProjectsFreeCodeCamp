//--------------------------------------------
function telephoneCheck (str) {
    // Define a regular expression for valid phone number patterns
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

    // Test the input string against the regular expression
    return regex.test(str);
}
//This is already the simplier solution