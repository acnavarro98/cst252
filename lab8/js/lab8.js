/*
 * Author: Ayline Castrejon
 * Created: February 25, 2021
 * License: Public Domain
 */

// Create an array of numbers and assign it to a variable.
array = [12, 9, 5, 34, 98, 2, 56, 7];
console.log("My array: ", array);
// Create a named function that will take a single parameter, do a calculation on it, and return the result.
function addNum(x){
    var results = x + 10;
    return results;
}
// Test your function with a few different numbers.
console.log("What is 12 + 10? ", addNum(12));
console.log("What is 34 + 10? ", addNum(34));
console.log("What is 7 + 10? ", addNum(7));
// Use map on your array to apply your function to all the numbers in your array.
var result = array.map(addNum);
console.log("Adding 10 to array: ", result);
 // Now use a new anonymous function with map to do some new operation on each of the numbers in your array.
 var result= array.map(function(x){
     return x * 10;
 })
console.log("Multiplying 10 to array: ", result);
