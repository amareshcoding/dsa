// Recursion.js

// 1) calculate sum of natural number up to 10
function sumNatural(n) {
  if (n === 1) return n;
  return n + sumNatural(n - 1);
}
// console.log('Sum: ', sumNatural(5));

// 2) factorial recursion
function factorial(n) {
  if (n === 1 || n === 0) return n;
  return n * factorial(n - 1);
}
// console.log('Factorial: ', factorial(5));

// 3) fibonacci recursion
function fibonacci(n) {
  if (n === 1 || n === 0) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log('Fibonacci: ', fibonacci(4));

// 4) length of string recursion
function lengthOfString(str, i = 0) {
  if (str[i] === undefined) return 0;
  return 1 + lengthOfString(str, i + 1);
}
// console.log('lengthOfString: ', lengthOfString('lengthOfString'));

// 5) a to the power b recursion
function aToThePowerB(a, b) {
  if (b === 0) return 1;
  return a * aToThePowerB(a, b - 1);
}
// console.log('aToThePowerB: ', aToThePowerB(2, 4));

// 6) binary equivalent recursion
function binaryEquivalent(n) {
  if (n === 0 || n === 1) return `${n}`;
  return binaryEquivalent(Math.floor(n / 2)) + (n % 2);
}
// console.log('binaryEquivalent: ', binaryEquivalent(15));

// 7) no of ways recursion
function noOfWays(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return noOfWays(n - 1) + noOfWays(n - 2) + noOfWays(n - 3);
}
// console.log('noOfWays: ', noOfWays(4));

// 8) nick&Hacks recursion
function nickNHacks(k, n = 1) {
  if (n === k) return true;
  if (n > k) return false;
  return nickNHacks(k, n * 10) || nickNHacks(k, n * 20);
}
// console.log('nickNHacks: ', nickNHacks(200));

// 9) GCD recursion
function gcd(a, b) {
  if (b % a === 0) return a;
  return gcd(b % a, a);
}
// console.log('gcd: ', gcd(51, 68));

// 10) santosh&Profit recursion
function noOfWays1(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return noOfWays1(n - 4) + noOfWays1(n - 8);
}
// console.log('noOfWays1: ', noOfWays1(12));

// 11) remove consucutive duplicates recursion
function remConDup(str) {
  let nstr = '';
  let i = 0;
  while (i < str.length) {
    if (i === 0) {
      if (str[i] !== str[i + 1]) {
        nstr += str[i];
      }
    } else if (i === str.length - 1) {
      if (str[i] !== str[i - 1]) {
        nstr += str[i];
      }
    } else {
      if (str[i] !== str[i - 1] && str[i] !== str[i + 1]) {
        nstr += str[i];
      }
    }
    i++;
  }
  if (nstr.length === 0) return 'Empty String';
  if (str.length === nstr.length) return str;
  return remConDup(nstr);
}
// console.log('remConDup: ', remConDup('axxxzayya'));
// console.log('remConDup: ', remConDup('aa'));
// console.log('remConDup: ', remConDup('a'));

// 12) digit sum recursion
function digitSum(n) {
  if (n <= 10) return n;
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return digitSum(sum);
}
// console.log('digitSum: ', digitSum(148148148));

// 13) all subsequence recursion
function allSubsequence(str, res, s, e) {
  if (res != '') {
    console.log(res);
  }
  for (let i = s; i <= e; i++) {
    allSubsequence(str, res + str[i], i + 1, e);
  }
}
// allSubsequence('abcd', '', 0, 3);

// 14) no of valid paranthesis
// formula (2n)!/n!*(n+1)!
function validParanthesis(s, open, close, n) {
  if (s.length === 2 * n) {
    console.log(s);
    return;
  }

  if (open < n) {
    validParanthesis(s + '(', open + 1, close, n);
  }

  if (open > close) {
    validParanthesis(s + ')', open, close + 1, n);
  }
}
// validParanthesis('', 0, 0, 3);
