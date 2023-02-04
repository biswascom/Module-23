const names = ['abul', 'babul', 'chabul', 'dabul', 'ebul', 'fabul', 'abul', 'abul', 'gabul', 'dabul', 'habul', 'ebul', 'fabul', 'jabul'];

function removeDuplicates (names) {
    const unique = [];
    for (i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicates(names);
console.log (uniqueNames);