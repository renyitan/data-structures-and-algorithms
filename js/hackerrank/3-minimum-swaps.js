

function minimumSwaps(arr) {
  let num = 0;
  quickSort(arr, 0, arr.length - 1, num);
  console.log(num);
}

function quickSort(arr, start, end, num) {
  if (start >= end) { return }
  let pIndex = partition(arr, start, end, num)
  quickSort(arr, 0, pIndex - 1, num);
  quickSort(arr, pIndex + 1, end, num);
}

function partition(arr, start, end, num) {
  let pivot = arr[end];
  let pIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      let temp = arr[pIndex]
      arr[pIndex] = arr[i]
      arr[i] = temp;
      num++;
      pIndex++;
    }
  }

  let temp = arr[pIndex];
  arr[pIndex] = arr[end];
  arr[end] = temp;
  num++;
  return pIndex;
}

console.log(minimumSwaps([4, 3, 1, 2]))