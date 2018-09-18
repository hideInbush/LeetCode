/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a1, b1) {
  const a = a1.split('').reverse().join('');
  const b = b1.split('').reverse().join('');

  const maxLen = a.length > b.length ? a.length : b.length;
  let counter = 0;
  let result = '';
  for (let i = 0; i < maxLen; i += 1) {
    if (a[i] && b[i]) {
      if (parseInt(a[i]) + parseInt(b[i]) + counter > 1) {
        result += parseInt(a[i]) + parseInt(b[i]) + counter - 2;
        counter = 1;
      } else {
        result += parseInt(a[i]) + parseInt(b[i]) + counter;
        counter = 0;
      }

    } else if(a[i] || b[i]) {
      const num = a[i] || b[i];
      if (parseInt(num) + counter > 1) {
        result += parseInt(num) + counter - 2;
        counter = 1;
      } else {
        result += parseInt(num) + counter;
        counter = 0;
      }
    }
  }

  if (counter === 1) {
    result += '1';
  }
  return result.split('').reverse().join('');
};

console.log(addBinary('1111', '1111'));