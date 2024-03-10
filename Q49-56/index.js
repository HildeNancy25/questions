// question 49
function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    console.log("Fibonacci sequence up to", n, "numbers is", sequence);
}

fibonacciSequence(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// question 50

function isArraySorted(arr) {
    const result = arr.every((num, index) => index === 0 || num >= arr[index - 1]);
    console.log("Is", arr, "sorted?", result);
}

isArraySorted([1, 2, 3, 4, 5]);
isArraySorted([5, 4, 3, 2, 1]);

// question 51

function filterOutNegativeNumbers(arr) {
    const filteredArr = arr.filter(num => num >= 0);
    console.log("Array after filtering out negative numbers from", arr, "is", filteredArr);
}

filterOutNegativeNumbers([1, -2, 3, -4, 5]);

// question 52
function squareRoot(num) {
    const sqrt = Math.sqrt(num);
    console.log("Square root of", num, "is", sqrt);
}

squareRoot(25);

// question 53
function median(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
    const medianValue = sortedArr.length % 2 === 0 ?
        (sortedArr[middle - 1] + sortedArr[middle]) / 2 :
        sortedArr[middle];
    console.log("Median of", arr, "is", medianValue);
}

median([1, 2, 3, 4, 5]); // 3

// qustion 54
function capitalizeFirstLetter(sentence) {
    const capitalizedSentence = sentence.replace(/\b\w/g, char => char.toUpperCase());
    console.log("Capitalized sentence:", capitalizedSentence);
}

capitalizeFirstLetter("hello world");

// question 55
function isLeapYear(year) {
    const leapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(year, "is a leap year?", leapYear);
}

isLeapYear(2024);

// question 56
function intersectionOfArrays(arr1, arr2) {
    const intersection = arr1.filter(value => arr2.includes(value));
    console.log("Intersection of", arr1, "and", arr2, "is", intersection);
}

intersectionOfArrays([1, 2, 3], [2, 3, 4]);