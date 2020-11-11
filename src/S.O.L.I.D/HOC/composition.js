//We can say it compotions of functions taking small small function making it large piece.

const { lte } = require("lodash");

//this is kind of HOC.
const increament = num => num + 1;
const decreament = num => num - 1;
const multiply = num => num * 3;
const NumbersOperations = increament(decreament(multiply(2)))

//Function as parameters
let arr = [1, 3, 8, 11];
const plusOne = n => n + 1;
// arr = arr.map(n => {
//     return plusOne(n);
// })
console.log(arr.map(plusOne));

//Function as HOC.
const hocArr = [1, 2, 3, 4];
//this function takes first param and arr and return mapped or sum of those numbers.
const addingFn = numbertoadd => arr => arr.map(num => num + numbertoadd);

//two ways to call first fn currying...
// const tempAddingFn = addingFn(1)(hocArr)
// call the method and pass arr as params.
 const tempAddingFn = addingFn(1)
const result = tempAddingFn(hocArr)
console.log(result);

//Immutability
//Do not change or mutate the object inside the function instead we can create a 
//shallow copy and leave original value Immutable. It takes input and copy it and 
//return the immutable object.
function Immutable(arr) {
    const arr1 = [...arr];
    return arr1;
}


/**
 * Design pattern
 */