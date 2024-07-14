// countOccurrences.js

function countOccurrences(input, query) {
    // Buat objek untuk menghitung frekuensi kata dalam INPUT
    const frequency = {};

    input.forEach(word => {
        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    });

    // Buat array untuk menyimpan hasil
    const result = query.map(word => frequency[word] || 0);

    return result;
}

module.exports = { countOccurrences };
