const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//! 1. nTraversal
function nTraversal(mat) {
  //store answer
  let ans = [];

  //traves left column from bottom to top
  for (let i = mat.length - 1; i >= 0; i--) {
    ans.push(mat[i][0]);
  }
  //traves left diagonal from top to bottom
  for (let i = 1; i < mat.length - 1; i++) {
    ans.push(mat[i][i]);
  }
  //traves right column from bottom to top
  for (let i = mat.length - 1; i >= 0; i--) {
    ans.push(mat[i][mat.length - 1]);
  }
  //return answer
  return ans;
}
let ansNT = nTraversal(matrix);
// console.log(...ansNT);

//! 2. zTraversal
function zTraversal(n, mat) {
  //store answer
  let ans = [];

  //traves top row from left to right
  for (let i = 0; i < mat[0].length; i++) {
    ans.push(mat[0][i]);
  }
  //traves right diagonal from top to bottom
  for (let i = 1; i < mat.length - 1; i++) {
    ans.push(mat[i][mat[0].length - 1 - i]);
  }
  //traves bottom row from left to right
  for (let i = 0; i < mat[0].length; i++) {
    ans.push(mat[mat.length - 1][i]);
  }
  //return answer
  return ans;
}
let ansZT = zTraversal(matrix.length, matrix);
console.log('ansZT: ', ...ansZT);
