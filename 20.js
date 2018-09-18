/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const count = s.length / 2 + 1;
    let i = 0;
    while(i < count) {
      s = s.replace(/(\(\))|({})|(\[\])/g, '');
      if (s === '') {
        return true;
      }
      i++;
    }

    return false;
};

console.log(isValid("[({(())}[()])]"))