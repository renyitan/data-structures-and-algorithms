function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      results.push(left[l]);
      l++;
    } else {
      results.push(right[r]);
      r++;
    }
  }

  while (l < left.length) {
    results.push(left[l]);
    l++;
  }

  while (r < right.length) {
    results.push(right[r]);
    r++;
  }
  return results;
}

const arr = [5, 1, 4, 2, 8, 6, 9];
console.log(mergeSort(arr));
