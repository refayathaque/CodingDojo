function moveValuesLeft(arr) {
  for(var x = 0; x < arr.length; x++) {
    arr[x] = arr[x + 1];
    if(x === arr.length - 1) {
      arr[x] = 0;
    }
  }
  console.log(arr);
}

moveValuesLeft([1, 2, 3, 4, 5]);
