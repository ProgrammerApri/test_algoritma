// longestWord.js

function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = "";

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return `${longest}: ${longest.length} character`;
}

module.exports = { longestWord };
