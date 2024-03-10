function arrayReverse(array) {
    var reversedArray = [];

    for (var i = array.length-1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

var array = [1, 3, 4, 3, 7, 8, 0, 12, 19];
var reversedArray = arrayReverse(array);
console.log(reversedArray);

//question 16

//ascending order 
function order(array){
    var ascending = [];
    for (let j = 1; j<= array.length; j++){

        if(ascending < ascending[j]){
            ascending.push(array[j-1]);
        }
    }
    return ascending;
}

var someNumbers = [3,4,8,2,1,2,2,6,3,4];
var numberAscending = order(someNumbers);
console.log(numberAscending);

// question 17

function ageOfPeople(age) {
    if (age >= 0 && age <= 12) {
        return "MIMICRY";
    } else if (age >= 13 && age <= 19) {
        return "SELF-DISCOVERY";
    } else if (age >= 20 && age <= 45) {
        return "COMMITMENT";
    } else {
        return "LEGACY";
    }
}

let theAge = ageOfPeople(27);
console.log("people having 27 years are: " + theAge);

// question 18

function calcBMI(weight, height) {
    const BMI = weight / (height * height);
    if (BMI < 18.5) {
        return "Underweight";
    } else if (BMI >= 18.5 && BMI < 25) {
        return "Normal weight";
    } else if (BMI >= 25 && BMI < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

let personBMI = calcBMI(20.9, 29);
console.log("your BMI is: " + personBMI);

// question 19

function countCharacters(str) {
    return str.replace(/\s/g, "").length;
}

console.log("Number of characters is: ", countCharacters("Hello World"));


