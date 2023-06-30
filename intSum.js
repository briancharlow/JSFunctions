
// Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// Test Data:
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
//     ([2, 3, 0, 5, 7, 8, true, false]) -> 25


// Expected Output:
// Original array: 2, 11, 3, a2, false, 5, 7, 1
// Sum all numbers of the said array: 18
// Original array: 2, 3, 0, 5, 7, 8, true, false
// Sum all numbers of the said array: 2


function sumOfNumbers(array) {
    let sum = 0;
    let numbers = array.filter(item => typeof item === 'number');

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}


const array1 = [2, "11", 3, "a2", false, 5, 7, 1];
const array2 = [2, 3, 0, 5, 7, 8, true, false];

console.log("Original array:", array1.join(", "));
console.log("Sum of all numbers of the said array:", sumOfNumbers(array1));

console.log("Original array:", array2.join(", "));
console.log("Sum of all numbers of the said array:", sumOfNumbers(array2));
