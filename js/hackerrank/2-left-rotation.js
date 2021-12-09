function leftRotation(a, d) {
  let rotateFactor = (d) % a.length

  let firstElems = a.slice(0, rotateFactor);
  for (let i = 0; i < a.length - 1; i++) {
    a[i] = a[i + rotateFactor]
  }

  let index = 0;
  for (let i = a.length - rotateFactor; i < a.length; i++) {
    a[i] = firstElems[index++]
  }
  return a;
}

console.log(leftRotation([1, 2, 3, 4, 5], 4))
console.log(leftRotation([1, 2, 3, 4, 5], 4))
