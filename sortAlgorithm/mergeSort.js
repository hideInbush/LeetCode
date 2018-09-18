const mergeSort = (array) => {
  const point = array.length / 2;
  const left = array.slice(0, point);
  const right = array.slice(point, array.length);

  if (array.length === 1) {
    return array;
  }

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let l = 0;
  let r = 0;
  const result = [];

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  while (l < left.length) {
    result.push(left[l]);
    l++;
  }

  while (r < right.length) {
    result.push(right[r]);
    r++;
  }

  return result;
}

console.log(mergeSort([75, 70, 65, 84, 98, 78, 100, 93, 55, 61, 81, 68]));