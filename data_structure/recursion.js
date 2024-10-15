// Recursion.js

// 1) calculate sum of natural number up to 10
function sumNatural(n) {
  if (n === 1) return n;
  return n + sumNatural(n - 1);
}
console.log('Sum: ', sumNatural(5));

// 2) factorial recursion
function factorial(n) {
  if (n === 1 || n === 0) return n;
  return n * factorial(n - 1);
}
console.log('Factorial: ', factorial(5));

// 3) fibonacci recursion
function fibonacci(n) {
  if (n === 1 || n === 0) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log('Fibonacci: ', fibonacci(4));

// 4) length of string recursion
function lengthOfString(str, i = 0) {
  if (str[i] === undefined) return 0;
  return 1 + lengthOfString(str, i + 1);
}
console.log('lengthOfString: ', lengthOfString('lengthOfString'));

// 5) a to the power b recursion
function aToThePowerB(a, b) {
  if (b === 0) return 1;
  return a * aToThePowerB(a, b - 1);
}
console.log('aToThePowerB: ', aToThePowerB(2, 4));

// 6) binary equivalent recursion
function binaryEquivalent(n) {
  if (n === 0 || n === 1) return `${n}`;
  return binaryEquivalent(Math.floor(n / 2)) + (n % 2);
}
console.log('binaryEquivalent: ', binaryEquivalent(15));

// git testing
