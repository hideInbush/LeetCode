/**
 * 67, 33, 21, 84, 49, 50, 75
 */
 const selectSort = array => {
   for (let i = 0, len = array.length; i < len; i += 1) {
    let smallest = array[i];
    let smallPos = i;

    for (let j = i + 1; j < len; j += 1) {
      if (smallest > array[j]) {
        smallPos = j;
        smallest = array[j];
      }
    }

    /* exchange */
    const tmp = array[i];
    array[i] = smallest;
    array[smallPos] = tmp;
    console.log(array);
   }
 };

 const array = [67, 33, 21, 84, 49, 50, 75];

 selectSort(array);