function greaterY(arr, Y) {
  count = 0;
  for(var x = 0; x < arr.length; x++) {
    if(arr[x] > Y) {
      count++;
    }
  }
  console.log(count);
}

greaterY([1, 4, 7, 6], 3)
