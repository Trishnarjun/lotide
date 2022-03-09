const assertEqual = function(actual, expected) {
  const result = actual === expected ? `😏😏😏 Assertion Passed: ${actual} === ${expected}` : `🤧🤧🤧 Assertion Failed: ${actual} !==  ${expected}`;
  console.log(result);
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
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false