let arr = [1, 4, 45, 6, 10, -8];
let x = 16;

// brut force
function twoSum1(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === x) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
console.log(twoSum1(arr, x));

// two pointer
function twoSum2(arr, x) {
  arr = arr.sort((a, b) => a - b);
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] == x) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] > x) {
      j--;
    } else {
      i++;
    }
  }
  return [-1, -1];
}
// console.log(twoSum2(arr, x));

// litcode- two pointer
function twoSum3(arr, x) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    const d = x - arr[i];
    if (map[d]) {
      return [map[d], i, d, arr[i]];
    } else {
      map[arr[i]] = i;
    }
  }
  return [-1, -1];
}
// console.log(twoSum3(arr, x));
