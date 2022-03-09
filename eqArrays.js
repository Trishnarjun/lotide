const assertEqual = function(actual, expected) {
  if (actual === true && expected === true) {
  console.log(`😏😏😏 Assertion Passed: ${actual} === ${expected}`);
  } else {
  console.log(`🤧🤧🤧 Assertion Failed: ${actual} !==  ${expected}`);
  }
};
const eqArrays = function(arrayOne, arrayTwo) {
  let counter = 0;
  for (let i = 0; i < arrayOne.length; i++ ) {
    if (arrayOne[i] === arrayTwo[i]) {
      counter++;
    }
  }
  if (counter === 3){
    return true
  } else{
    return false;
  } 
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false