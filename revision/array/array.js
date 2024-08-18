/*
Q1: Given an array of integers print all the odd index items in a single line
Input: [2,3,6,8,7,7,10]
Output: 5 6 7 10
*/
let arr1 = [2, 5, 6, 6, 8, 7, 7, 10];

function printOddIndexEle(arr, n) {
     let ans = "";
     for(let i=0; i<n; i++){
          if(i%2 !== 0){
               ans += arr[i] + " ";
          }
     }
     return ans;
}
let res1 = printOddIndexEle(arr1, arr1.length);
console.log('res1: ', res1);

