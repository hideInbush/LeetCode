/**
 * 67, 33, 21, 84, 49, 50, 75
 */

const insertSort = array => {
  for (let i = 1, len = array.length; i < len; i += 1) {
    const nextElement = array[i];
    // const copy = nextElement;

    let j = i;
    while(nextElement < array[j - 1]) {
      array[j] = array[j - 1];
      j -= 1;
    }

    array[j] = nextElement;
    console.log(array);
  }
};


const array = [67, 33, 21, 84, 49, 50, 75];

insertSort(array);