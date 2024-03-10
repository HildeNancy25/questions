// question 37
function findIndexOfCharacter(str, char) {
    return str.indexOf(char);
}

console.log(findIndexOfCharacter("hello", "e"));

// question 38
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([43, 49, 43, 8, 4, 40, 52]));

// question 39
function valuePresent(arr, value) {
    return arr.includes(value);
}

console.log(valuePresent([1, 2, 3, 4, 5], 3)); 

// question 40
function squareArray(arr) {
    return arr.map(num => num * num);
}

console.log(squareArray([1, 2, 3, 4, 5])); 

// qusetion 41
function firstNElements(arr, n) {
    return arr.slice(0, n);
}

console.log(firstNElements([21, 32, 43, 54, 65], 2)); 


// question 42
function removeLastElement(arr) {
    return arr.slice(0, -1);
}

console.log(removeLastElement([21, 32, 43, 54, 65])); 

// question 43
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

console.log(sortArray([83, 14, 40, 1, 95, 9, 210, 6, 5])); 


// question 44
function areAllPositive(arr) {
    const result = arr.every(num => num > 0);
    console.log("elements in ", arr, " is positive? ", result);
}

areAllPositive([1, 2, 3, 4, 5]);
areAllPositive([1, -2, 3, -4, 5]);

// question 45

function sumOfEvenNumbers(arr) {
    const sum = arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of even numbers in", arr, "is", sum);
}

sumOfEvenNumbers([1, 2, 3, 4, 5]);

// question 46
function stringsToUppercase(arr) {
    const uppercaseArr = arr.map(str => str.toUpperCase());
    console.log("Uppercase of", arr, "is", uppercaseArr);
}

stringsToUppercase(['hello', 'world']);

// question 47
function generateRandomNumber(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Random number between", min, "and", max, "is", randomNum);
}

generateRandomNumber(1, 10);

// question 48
function reverseArray(arr) {
    const reversedArr = arr.slice().reverse();
    console.log("Reversing ", arr, "will give: ", reversedArr);
}

reverseArray([1, 2, 3, 4, 5]); 