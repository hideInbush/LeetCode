/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const array = s.split('');
  let num = 0;
  for (let i = 0; i < array.length; i += 1) {
    const value = array[i];
    const next = array[i + 1];

    if (next && format(value) < format(next)) {
      num -= format(value);
    } else {
      num += format(value);
    }
  }

  return num;
};

var format = ch => {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  return map[ch];
}

console.log(romanToInt('MCMXCIV'));