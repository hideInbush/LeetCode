/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const array = [];
  let pre = [];
  for (let i = 0; i < rowIndex + 1; i += 1) {
    if (i === 0) {
      array.push([1]);
    } else if (i === 1) {
      array.push([1, 1]);
    } else {
      const mid = [];
      for (let j = 0; j < pre.length - 1; j += 1) {
        mid.push(pre[j] + pre[j+1]);
      }
      array.push([1].concat(mid).concat([1]));
    }

    pre = array.slice().pop();
    if (rowIndex === i) {
      return pre;
    }
  }

};