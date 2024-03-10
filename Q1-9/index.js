//function that returns the sum of two numbers
function sum(a, b){
    return a+b;
}
console.log(sum(5748,789));

//function that returns the product of two numbers

function product(a, b){
    return a*b; 
}
console.log(product(36,2));

//function that returns the difference of 2 numbers

function diff(a, b){
    return a-b;
}
console.log(diff(8,54));

// function that returns the divisionof two numbers

function div(a,b){
    return a/b;
}
console.log(div(123,10));

// function that return the sum  an array 

function sumOfArrays (array){
    let sum = 0;
    for (let i=0 ; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}
const arr = [28,43,6,6,10,3];
const arrResult = sumOfArrays(arr);
console.log("the sum is:", arrResult);

// function that returns the greatest value inside an array

function greatest (array){
   let greatest = array[0]; 
   for (let a = 0; a<array.length; a++ ){
        if (array[a]> greatest){
            greatest = array[a]; 
        }   
   }
   return greatest;
}

const arr1 = [ 27,54,4,3,6,7,8,99,98];
const value = greatest(arr1);
console.log("the greatest number in your array is:", value);

// function that return the smallest number of an array

function smallest (array){
    let small = array[0];
    for (let v=0; v<array.length; v++){
        if(array[v]< small){
            small = array[v];
        }
    }
    return small;
}
const arr2 = [2,65,7,9,0,87,5,4,9];
const theSmall = smallest(arr2);
console.log('the smallest number in your array iS:', theSmall);

// FUNCTION that return the average of the array

function average (array){
    let avg = 0;
    for (let c=0; c<array.length; c++){
        avg += array[c]; 
    }
    return avg / array.length;
}

const arr3 = [12,5,3,2];
const theAvg = average(arr3);
console.log("the average of your array is:", theAvg);

// function that combines 2 arrays

function combine (array){
    return array.reduce((combined, current) =>{
    return combined.concat(current); 
    }, []);
}

const arrange = ['a','b','c','d'];
const arraytwo = ['e','f','g'];
const combined = combine(arrange, arraytwo);
console.log('the combined array gives:', combined);

