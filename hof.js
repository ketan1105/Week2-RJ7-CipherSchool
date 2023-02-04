const addTwoNumbers = (a, b) => a + b;

const higherOrderFunction = (a, lowerFunction) => {
  return lowerFunction(a, 20);
};

console.log(higherOrderFunction(10, addTwoNumbers));
