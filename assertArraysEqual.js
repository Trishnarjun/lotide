const eqArrays = function(arrayOne, arrayTwo) {
  let counter = 0;
  for (let i = 0; i < arrayOne.length; i++ ) {
    if (arrayOne[i] === arrayTwo[i]) {
      counter++;
    }
  }
  if (counter === 3){
    return true
  } else {
    return false;
    console.log(0);
  } 
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne === true && arrayTwo === true) {
    console.log(`😏😏😏 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🤧🤧🤧 Assertion Failed: ${arrayOne} !==  ${arrayTwo}`);
  }
}
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false