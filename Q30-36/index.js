// question 30

function displayMultiples() {
    for (let i = 5; i <= 100; i += 5) {
        return i;
    }
}

console.log(displayMultiples() + ' are multiples of 1 to 100.');

// question 31

function sqrRoot() {
    return Math.sqrt(num);
}

console.log(sqrRoot(89));

// question 32

function biggerNumber(a, b) {
    return a > b ? a : b;
}

console.log(biggerNumber(38, 38.7));

// question 33

function toUpperCase(str) {
    return str.toUpperCase();
}

console.log(toUpperCase('my cat'));

// question 34

function stringModifier(str, position, character) {
    return str.substring(0, position - 1) + character + str.substring(position);
}

console.log("Modified string:", stringModifier("hello", 3, "X"));

// question 35

function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

console.log(countVowels("why not consonsnt?"));

// question 36

function countConsonants(str) {
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return consonants ? consonants.length : 0;
}

console.log(countConsonants('why not voyel?'));