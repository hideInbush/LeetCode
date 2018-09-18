/**
 * 75, 70, 65, 84, 98, 78, 100, 93, 55, 61, 81, 68
 */

const quickSort = (array) => {
  if (array.length === 0) {
    return [];
  }

  const pivot = array[Math.floor((array.length - 1) / 2)];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < pivot) {
      left.push(array[i]);
    }
    
    if (array[i] > pivot) {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

const array = [75, 70, 65, 84, 98, 78, 100, 93, 55, 61, 81, 68];
console.log(quickSort(array));