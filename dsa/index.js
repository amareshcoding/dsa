//1)
//Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

const nums = [2, 7, 11, 15],
  target = 9;

function twoSum(arr, k) {
  // for(let i=0; i<arr.length; i++){
  //      for(let j=i+1; j<arr.length; j++){
  //           if(arr[i] + arr[j] == k){
  //                return [i, j];
  //           }
  //      }
  // }
  //O(N*N)
  //O(1)

  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let com = k - num;
    if (com in map) {
      return [i, map[com]];
    } else {
      map[num] = i;
    }
  }
  //O(N)
  //O(N);
}

const res = twoSum(nums, target);
console.log('res: ', res);

//2)
//Palindrome Number
//Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// Input: x = 121
// Output: true

var isPalindrome = function (x) {
  if (x < 0) return false;

  let num = x;
  num = num.toString();

  for (let i = 0; i < Math.floor(num.length / 2); i++) {
    if (num[i] != num[num.length - i - 1]) return false;
  }
  return true;
  //O(N)
  //O(1)
};
const str = 112211;
console.log(isPalindrome(str));

//3)
//Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  if (strs == '') return '';
  // let flag = false
  // let ans = "";
  // for(let i=0; i<strs[0].length; i++){
  //     let char = strs[0][i];
  //     for(let j=1; j<strs.length; j++){
  //         if(char != strs[j][i]){
  //             flag = true;
  //             break;
  //         }
  //     }
  //     if(flag) break;
  //     else ans+=char;
  // }return ans;

  //O(N*N)
  //O(1)

  strs = strs.sort();
  let ans = '';
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] != strs[strs.length - 1][i]) break;
    ans += strs[0][i];
  }
  return ans;
  //O(NlogN)
  //O(1);
};
const strs = ['flower', 'flight', 'flow'];
console.log(longestCommonPrefix(strs));

//4)
//Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Input: s = "()"
// Output: true
var isValid = function (s) {
  if (s.length % 2 == 1) return false;
  let map = { '(': ')', '{': '}', '[': ']' };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
      if (stack.length === 0 || s[i] != stack[stack.length - 1]) return false;
      else stack.pop();
    } else {
      stack.push(map[s[i]]);
    }
  }
  return stack.length === 0;
};
const paren = ['{', '[', '(', ')', ']', '}'];
console.log(isValid(paren));



// sort an array with the absolute value of numbers
// ex arr = []
// ans array = [-1, 0, -2, -2, 2, 3, -7]



// Toeplitz Matrix
// every left-to-right descending diagonals has the same element
/*
[[1, 2, 3, 4],
[5, 1, 2, 3],
[6, 5, 1, 2],
[7, 6, 5, 1]]

*/