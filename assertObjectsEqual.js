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
const eqObjects = function(object1, object2) {
  const setOfKeys1 = Object.keys(object1);
  const setOfKeys2 = Object.keys(object2);
  
  if (setOfKeys1.length !== setOfKeys2.length) {
    return false;
  }
  for (let i = 0; i < setOfKeys2.length; i++) {
    if (object1[setOfKeys1[i]] === object2[setOfKeys1[i]] && object2[setOfKeys1[1]].length === 1) {
      return true;
    } else if (eqArrays(object1[setOfKeys1[1]], object2[setOfKeys1[1]])) {
      return true;
    } else {
      return false;
    }
  }
};
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`😏😏😏 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🤧🤧🤧 Assertion Failed: ${inspect(object1)} !==  ${inspect(object2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);// => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
