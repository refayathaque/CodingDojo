function reverseArray(arr) {
  var temp = 0;
  for(var left = 0, right = arr.length - 1; left < right; left++, right--) {
    temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
  }
  console.log(arr);
}

reverseArray([1, 2, 3, 4, 5]);

function reverseArray2(arr) {
  var temp = 0;
  for(var x = 0; x < (arr.length / 2); x++) {
    temp = arr[(arr.length - 1) - x];
    arr[(arr.length - 1) - x] = arr[x];
    arr[x] = temp;
  }
  console.log(arr);
}

reverseArray2([1, 2, 3, 4, 5]);
