const once = (fn) => {
  let isAlreadyInvoked = false;
  let currentState;
  return function (...args) {
    if (!isAlreadyInvoked) {
      currentState = fn.apply(this, args);
      isAlreadyInvoked = true;
    }
    return currentState;
  };
};

const sum = (a, b) => a + b;

const onceSum1 = once(sum);

const onceSum2 = once(sum);

console.log(onceSum1(1, 3)); // => 4

console.log(onceSum1(5, 3)); // => 4

console.log(onceSum2(2, 7)); // => 9

console.log(onceSum2(5, 2)); // => 9
