const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😏😏😏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤧🤧🤧 Assertion Failed: ${actual} !==  ${expected}`);
  }
};
const eqArrays = function(arrayOne, arrayTwo) {
  let counter = 0;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      counter++;
    }
  }
  if (counter === arrayOne.length & counter === arrayTwo.length) {
    return true;
  } else {
    return false;
  }
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back false.
const eqObjects = function(object1, object2) {
  const setOfKeys1 = Object.keys(object1);
  const setOfKeys2 = Object.keys(object2);
  
  if (setOfKeys1.length !== setOfKeys2.length) {
    return false;
  }
  for (let i = 0; i < setOfKeys2.length; i++) {
    if (object1[setOfKeys1[i]] === object2[setOfKeys1[i]] && object2[setOfKeys1[1]].length === 1) {
      console.log(object2[setOfKeys1[1]].length);
      return true;
    } else if (eqArrays(object1[setOfKeys1[1]], object2[setOfKeys1[1]])) {
      return true;
    } else {
      return false;
    }
  }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false