/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var sum=0;
  while(n>0){
    sum+=parseInt(n/5);
    n=parseInt(n/5);
  }

  return sum;
};

console.log(trailingZeroes(30));