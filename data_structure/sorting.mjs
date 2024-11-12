// selection sort
let arr1 = [4, 2, 6, 1, 8, 5, 9, 7];
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// console.log(selectionSort(arr1));

// bubble sort
let arr2 = [4, 2, 6, 1, 8, 5, 9, 7];
function bubblrSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubblrSort(arr2));

// sort an array with the absolute value of numbers
// ex arr = []
// ans array = [0, -1, -2, -2, 2, 3, -7]
let arr3 = [-2, -1, 0, -7, 2, 3, -2];
function absolutebubblrSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (Math.abs(arr[j]) > Math.abs(arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else if (Math.abs(arr[j]) == Math.abs(arr[j + 1])) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
}
console.log(absolutebubblrSort(arr3));
