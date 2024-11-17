//1) rotate an array at k position
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
//2) reverse polish notation
// [2, 1, +, 3, *] -> ((2+1)*3) -> 9
// [4, 13, 5, /, +] -> (4+(13/5)) -> 6

// let arr1 = ['2', '1', '+', '3', '*'];
let arr1 = ['4', '13', '5', '/', '+'];
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
// console.log(revPolNot(arr1));

// solving using stack
const revPolNot1 = (arr) => {
  let stack = [];
  let operators = '+-*/';
  for (let i = 0; i < arr.length; i++) {
    if (!operators.includes(arr[i])) {
      stack.push(arr[i]);
    } else if (
      arr[i] == '+' ||
      arr[i] == '-' ||
      arr[i] == '*' ||
      arr[i] == '/'
    ) {
      let el1 = stack.pop();
      let el2 = stack.pop();
      stack.push(String(Math.floor(eval(`${el2} ${arr[i]} ${el1}`))));
    }
  }
  return stack.pop();
};
// console.log(revPolNot1(arr1));

//--------------------------------------------------------
//3) longest palindrom
let str = 'abcbav';
// let str = 'abccba';

// brute force solution O(n3)
function longPalinn(str) {
  let max = '';
  for (let i = 0; i < str.length; i++) {
    let sub = '';
    for (let j = i; j < str.length; j++) {
      sub += str[j];
      if (isPalindreome(sub) && sub.length > max.length) {
        max = sub;
      }
    }
  }

  function isPalindreome(str) {
    let half = Math.floor(str.length / 2);
    for (let i = 0; i < half; i++) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
  }

  return max;
}
console.log(longPalinn(str));

// optimal solution O(n2)
const lonPal = (str = 'a') => {
  if (!str) return null;
  if (str.length <= 1) return str;

  const palindrom = (str, s, e) => {
    while (s >= 0 && e <= str.length - 1 && str.charAt(s) === str.charAt(e)) {
      s--;
      e++;
    }
    return str.substring(s + 1, e);
  };

  let max = str.charAt(0);
  for (let i = 0; i < str.length; i++) {
    // i is the center
    let temp = palindrom(str, i, i);
    if (temp.length > max.length) max = temp;

    // center is middle of i and i+1
    temp = palindrom(str, i, i + 1);
    if (temp.length > max.length) max = temp;
  }
  return max;
};

// console.log(lonPal(str));
