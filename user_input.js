const readline = require('readline-sync');

function userInput() {
    const content = askedAndReturnedPrefix();
    return content;
}

function askedAndReturnedSearchTerm() {
    return readline.question('One question example: ');
}
function askedAndReturnedPrefix() {
    const prefixes = ['real', 'dólar', 'peso argentino'];
    const selectedPrefixeIndex = readline.keyInSelect(prefixes);
    const selectedPrefixText = prefixes[selectedPrefixeIndex];

    return selectedPrefixText;
}

module.exports = userInput;