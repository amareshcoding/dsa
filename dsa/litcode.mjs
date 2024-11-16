// rotate an array at k position
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
// solution arr = [5, 6, 7, 1, 2, 3, 4]
const rotateArr = (arr, k) => {
  // solution 1
  //   for (let i = 1; i <= k; i++) {
  //     let temp = arr.pop();
  //     arr.unshift(temp);
  //   }
  // return arr;
  // solution 2
  //   let narr = [];
  //   for (let i = k+1; i < arr.length; i++) {
  //     narr.push(arr[i]);
  //   }
  //   for (let i = 0; i <= k; i++) {
  //     narr.push(arr[i]);
  //   }
  //   return narr;
};
// console.log(rotateArr(arr, k));

//--------------------------------------------------------
// reverse polish notation
// [2, 1, +, 3, *] -> ((2+1)*3) -> 9
// [4, 13, 5, /, +] -> (4+(13/5)) -> 6

let arr1 = ['2', '1', '+', '3', '*'];
// let arr1 = ['4', '13', '5', '/', '+'];
const revPolNot = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] == '/') {
      arr[i] = Math.floor(eval(`${arr[i - 2]} ${arr[i]} ${arr[i - 1]}`));
      if (arr[i - 3]) {
        arr[i - 1] = arr[i - 3];
      }
    }
  }
  return arr[arr.length - 1];
};
console.log(revPolNot(arr1));
