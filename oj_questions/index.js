//You are given a number N, you need to find sum of all the even numbers
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
console.log(evenSum(4));
