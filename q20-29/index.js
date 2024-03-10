//question 20

function evenNumbers() {
    for (let i = 1; i <= 100; i += 1) {
        if (i % 2 === 0){
            console.log(i);
        }
    }
}

let theEven = evenNumbers();
console.log("here is the even numbers between 1 and 100: " + theEven);

//question 21

function square(num) {
    return num * num;
}
console.log(square(5));

//question 22

function even(num) {
    if (num % 2 === 0){
        return 'your number is even';
    } else {
        return 'your number is not even';
    }
}

// console.log(even(29));
console.log(even(684));

//question 23

function odd(num) {
    if (num % 2 !== 0){
        return 'your number is odd';
    }
}

console.log(odd(5));

//question 24

function maxNumbers(a, b) {
    return Math.max(a, b);
}

let theNumbers = maxNumbers(55, 930);
console.log('the max number is: ' + theNumbers);

// question 25

function minNumbers(a, b) {
    return Math.min(a, b);
}

let theNumber = minNumbers(55, 930);
console.log('the minimun number is: ' + theNumber);

// question 26

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log('thefactorial of given number is: ' + factorial(9));

//question 27

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("The reverse of 'hello' will be: ", reverseString("hello"));

//question 28

function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

console.log(isPalindrome("function"));

// question 29

function displayOddNumbers() {
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
    }
}

console.log("Odd numbers from 1 to 100:" + displayOddNumbers());