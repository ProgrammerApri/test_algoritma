// diagonalDifference.js

function diagonalDifference(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

module.exports = { diagonalDifference };



