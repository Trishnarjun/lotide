const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne,arrayTwo) === true) {
    console.log(`😏😏😏 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🤧🤧🤧 Assertion Failed: ${arrayOne} !==  ${arrayTwo}`);
  }
};
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(arr) {
  if (arr.length % 2 === 0) {
    if (arr.length === 2) {
      return [];
    } else {
      let indexOfMiddle1 = (arr.length / 2) - 1;
      let indexOfMiddle2 = arr.length / 2;
      return [arr[indexOfMiddle1],arr[indexOfMiddle2]];
    }
  } else {
    if (arr.length === 1) {
      return [];
    } else {
      let indexOfMiddle = (arr.length - 1) / 2;
      return [arr[indexOfMiddle]];
    }
  }
};
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]