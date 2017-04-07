function maxMinAvg(arr) {
var sum = 0;
var avg = 0;
var max = arr[0];
var min = arr[0];
var newarr = [];
for(var i = 1; i < arr.length; i++) {
  if(max < arr[i]) {
    max = arr[i];
  }
}
for(var i = 1; i < arr.length; i++) {
  if(min > arr[i]) {
    min = arr[i];
  }
}
for(var i = 0; i < arr.length; i++) {
  sum += arr[i];
  avg = sum/arr.length;
}
newarr.push(max, min, avg);
console.log(newarr);
}
maxMinAvg([1, 2, 3, 4, 5, 6]);
