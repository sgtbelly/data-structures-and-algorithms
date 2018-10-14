'use strict'
let test1 = [4,8,15,16,23,42];
let test2 = [11,22,33,44,55,66,77];

function BinarySearch (arr, value) {

  let min = 0
  let max = arr.length - 1
  let middle = Math.floor((min + max) / 2)

  while (arr[middle] !== value && min <= max) {
    if (value < arr[middle]) {
      max = middle - 1
    } else {
      min = middle + 1
    }

    middle = Math.floor((min + max) / 2)
  }

  return (arr[middle] !== value) ? -1 : middle
}

BinarySearch(test1, 15);
console.log(BinarySearch(test1, 15));
BinarySearch(test2, 99);





