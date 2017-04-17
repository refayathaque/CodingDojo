function findAvg(arr) {
  var sum = 0;
  for(var x = 0; x < arr.length; x++) {
    sum += arr[x];
  }
  var avg = sum/arr.length;
  console.log(avg);
}

findAvg([1, 2, 3, 4]);
