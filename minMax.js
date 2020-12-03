/**
 * Copyright (c) 2020
 *
 * This program determines the maximum and the minimum number
 * in an array consisting of 10 randomly generated numbers.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/02
 */
 
// This function determines the maximum number in the given array.
function maxNumber (array1) {
  
  // Declaring variables:
  let max = 0;
  
  // For loop to check every number in the array to determine the maximum number:
  for (var numberSelected = 0; numberSelected < 10; numberSelected++) {
    if (array1[numberSelected] > max) {
      max = array1[numberSelected];
    } else {
      continue;
    }
  }
  // Return maximum number:
  return max;
}

// This function determines the minimum number in the given array.
function minNumber (array1) {
  
  // Declaring variables:
  let min = 100;
  
  // For loop to check every number in the array to determine the minimum number:
  for (var numberSelected = 0; numberSelected < 10; numberSelected++) {
    if (array1[numberSelected] < min) {
      min = array1[numberSelected];
    } else {
      continue;
    }
  }
  // Return minimum number:
  return min;
}

// Creating an array of 10 integers: 
var array1 = Array(10);

// For loop to generate and append random numbers in the array:
for (let counter = 0; counter < 10; counter++) {
  let randomNumber = Math.floor((Math.random() * 100) + 1);
  array1[counter] = randomNumber;
}
// Printing out the array:
console.log ([array1.toString()]);
console.log (``);

// Calling maxNumber function:
const MAX_NUM = maxNumber(array1);
console.log(MAX_NUM);
console.log (``);

// Calling minNumber function:
const MIN_NUM = minNumber(array1);
console.log(MIN_NUM);
console.log (``);