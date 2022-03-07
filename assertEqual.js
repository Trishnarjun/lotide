const assertEqual = function(actual, expected) {
  const result = actual === expected ? "😏😏😏 Assertion Passed: " + actual + " === " + expected : "🤧🤧🤧 Assertion Failed: " + actual + " !== " + expected;
  console.log(result);
};

// test cases for assertion function
assertEqual('okay','okay');
assertEqual('okay','oka');
assertEqual(1,1);
assertEqual(1,3);