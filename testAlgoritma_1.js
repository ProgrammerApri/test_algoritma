// reverseString.js
function reverseStringWithNumber(inputString) {
    // Pisahkan angka dari huruf
    let letters = "";
    let numbers = "";

    for (let char of inputString) {
        if (isNaN(char)) {
            letters += char;
        } else {
            numbers += char;
        }
    }
    // Balikkan huruf
    let reversedLetters = letters.split('').reverse().join('');
    // Gabungkan hasilnya
    return reversedLetters + numbers;
}
module.exports = { reverseStringWithNumber };
