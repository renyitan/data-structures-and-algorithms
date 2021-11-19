function binarySearch(arr, target, left, right) {
  if (left > right) return false;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

const arr = [1, 2, 4, 5, 8, 10, 11, 21];
console.log(binarySearch(arr, 5, 0, arr.length - 1));
