const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let counter = 0;
    for (let j = 0; j < sentence.length; j++) {
      if (sentence.charAt(i) === sentence.charAt(j)) {
        counter++
        let key = sentence.charAt(i);
        if (Array.isArray(results[key])) {
          console.log(Array.isArray(results[key]))
          results[key].push(sentence.indexOf(sentence.charAt(i)) + 1);
        } else {
          results[key] = [sentence.indexOf(sentence.charAt(i))];
        }
        
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
}
const eqArrays = function(arrayOne, arrayTwo) {
  let counter = 0;
  for (let i = 0; i < arrayOne.length; i++ ) {
    if (arrayOne[i] === arrayTwo[i]) {
      counter++;
    }
  }
  if (counter === arrayOne.length & counter === arrayTwo.length ){
    return true
  } else{
    return false;
  } 
};

assertArraysEqual(letterPositions("hello").l, [2,3,3,3]);