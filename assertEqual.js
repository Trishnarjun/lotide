const assertEqual = function(actual, expected) {
  if (actual === true && expected === true) {
    console.log(`😏😏😏 Assertion Passed: ${actual} === ${expected}`);
    } else {
    console.log(`🤧🤧🤧 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// test cases for assertion function
assertEqual('okay','okay');
assertEqual('okay','oka');
assertEqual(1,1);
assertEqual(1,3);