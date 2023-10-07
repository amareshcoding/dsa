const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function nTraversal(mat) {
  let ans = [];

  for (let i = mat.length - 1; i >= 0; i--) {
    ans.push(mat[i][0]);
  }
  for (let i = 1; i < mat.length - 1; i++) {
    ans.push(mat[i][i]);
  }
  for (let i = mat.length - 1; i >= 0; i--) {
    ans.push(mat[i][mat.length - 1]);
  }
  return ans;
}
let ans = nTraversal(matrix);
console.log(...ans);
