function greaterThan(arr, y) {
  var greaterarr = [];
  for(var x = 0; x < arr.length; x++) {
    if(arr[x] > y) {
      greaterarr.push(arr[x]);
    }
  }
  console.log(greaterarr); //[8, 5]
}
greaterThan([1, 2, 8, 3, 5], 4)
// Not printing in array form...
function greaterthanValue(arr, y) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > y) {
      console.log(arr[i]); //8, 5
    }
  }
}
greaterthanValue([1, 2, 8, 3, 5], 4)
