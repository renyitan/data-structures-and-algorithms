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
  let pivot = arr[end];
  let pIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      let temp = arr[pIndex];
      arr[pIndex] = arr[i];
      arr[i] = temp;
      pIndex++;
    }
  }

  let temp = arr[pIndex];
  arr[pIndex] = arr[end];
  arr[end] = temp;

  return pIndex;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid, arr.length1);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let i = 0;
  let j = 0;
  let results = [];

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      results.push(leftArr[i]);
      i++;
    } else {
      results.push(rightArr[j]);
      j++;
    }
  }

  if (i < leftArr.length) {
    results.push(leftArr[i]);
    i++;
  }

  if (j < rightArr.length) {
    results.push(rightArr[j]);
    j++;
  }

  return results;
}

function binarySearch(arr, target) {
 

  let mid = Math.floor((arr.length - 1) / 2);
 

  if (arr[mid] === target) return true;
  if (arr.length <= 1) {
    return false;
  }

  if (arr[mid] > target) {
 
    return binarySearch(arr.slice(0, mid), target);
  } else {
    return binarySearch(arr.slice(mid), target);
  }

}

const arr = [5, 1, 4, 2, 8, 6, 9];
// console.log(quickSort(arr, 0, arr.length - 1));
// console.log(mergeSort(arr));
// console.log(binarySearch(arr.sort(), 8));
