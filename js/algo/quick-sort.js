function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let pIndex = partition(arr, start, end);
  quickSort(arr, 0, pIndex - 1);
  quickSort(arr, pIndex + 1, end);
  return arr;
}

function partition(arr, start, end) {
  // choose left most element
  let pivot = arr[end];
  let pIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      let temp = arr[i];
      arr[i] = arr[pIndex];
      arr[pIndex] = temp;
      pIndex++;
    }
  }

  let temp = arr[pIndex];
  arr[pIndex] = arr[end];
  arr[end] = temp;

  return pIndex;
}

const arr = [5, 1, 4, 2, 8, 6, 9];
console.log(quickSort(arr, 0, arr.length - 1));
