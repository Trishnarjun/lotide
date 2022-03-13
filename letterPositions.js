const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let j = 0; j < sentence.length; j++) {
    if (sentence.charAt(j) === sentence.charAt(j)) {
      let key = sentence.charAt(j);
      if (Array.isArray(results[key])) {
        results[key].push(sentence.indexOf(sentence.charAt(j)) + 1);
      } else {
        results[key] = [sentence.indexOf(sentence.charAt(j))];
      }
    }
  }
  delete results[" "];
  console.log(results);
  return results;
};
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

assertArraysEqual(letterPositions("hello").e, [1]);