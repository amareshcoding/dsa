//Q1: You are given a number N, you need to find sum of all the even numbers
//which are less than or equal to N.
//input: 4
//output: 6

//Solution
function evenSum(n) {
  let sum = 0;
  for (let i = 2; i <= n; i = i + 2) {
    sum += i;
  }
  return sum;
}
console.log(evenSum(10));

//Q2: You are given a number N, you need to find sum of all the odd numbers
//which are less than or equal to N.
//input: 6
//output: 9

//Solution
function oddSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i = i + 2) {
    sum += i;
  }
  return sum;
}
console.log(oddSum(10));

//Q3: Odd sum greater or Even sum greater
//input: 10
//output: even

//Solution
function oddOrEven(n) {
  let evenSums = evenSum(n);
  let oddSums = oddSum(n);
  return evenSums >= oddSums ? 'even' : 'odd';
}
console.log(oddOrEven(10));
