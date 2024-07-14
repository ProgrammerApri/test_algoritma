const { reverseStringWithNumber } = require('./testAlgoritma_1');
// Contoh penggunaan
const inputString = "NEGIE1";
const outputString = reverseStringWithNumber(inputString);
console.log(outputString);


// index no: 2
const { longestWord } = require('./testAlgoritma_2');

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const result = longestWord(sentence);
console.log(result);


// index no: 3
const { countOccurrences } = require('./testAlgoritma_3');

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const results = countOccurrences(INPUT, QUERY);
console.log(results);


// index no: 4
const { diagonalDifference } = require('./testAlgoritma_4');

const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

const resul = diagonalDifference(matrix);
console.log(resul);

