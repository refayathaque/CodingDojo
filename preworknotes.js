function greetSomeone(person){
  var person1 = person.toLowerCase();
  if (person1 == "refayat")
  {
    console.log("Hey there Refayat!");
  }
  else
  {
    console.log("Hey there other guy!");
  }
}

greetSomeone("Refayat")
greetSomeone("refayat")
greetSomeone("George")

function printMyName(name){
  console.log(name);
}

printMyName("John")

var othername = printMyName("Harry")
console.log(othername); // Outputs 'undefined', not really sure why...

// The most difficult challenge yet in the Algorithms App

var array = [5, 3, 4, 1]

for(var x=0; x<array.length; x++)
{
  for(var y=array.length-1; y>=x; y--)
  {
    if(array[x] > array[y])
    {
      var temp = array[y]; // MUTATES THE CALLER! Modifies var array permanently
      array[y] = array[x];
      array[x] = temp;
    }
  }
}

console.log(array) // Outputs [1, 3, 4, 5]

var number = ''; // Empty STRING
var x = 5;

while (x < 10)
{
  number += x; // String CONCATENATION
  x++;
}

console.log(number); // Outputs STRING '56789'

// Function that would get the sum of all even numbers from 1 to 1000.

function get_even_numbers() {
  var sum = 0; // Our container
  for(var i = 1; i < 1001; i++) {
    if(i % 2 == 0) { // If function asked for odd instead of even do 'i % 2 != 0'
      sum += i; // Same as sum = sum + i
    }
  }
  console.log(sum);
}

get_even_numbers();

// Function that would iterate over an array and get the sum of all elements.

function arrayiteration(arr) {
  var sum1 = 0;
  for(var i = 0; i < arr.length; i++){ // Iterate over ARRAYs with indexing
    sum1 += arr[i];
  }
  console.log(sum1);
}

arrayiteration([1, 2, 3, 4]);

// Function that prints the maximum (highest) number in an array

function findMax(arr) {
    var max = '';
    arrsorted = arr.sort(function(a, b){return a - b});
    max = arrsorted.pop();
    console.log(max);
}

findMax([1, 657, 2, 87]);

// Another way to do the same thing above without the sort method is:

function findMax(arr) {
  var max = arr[0];
  for(var x = 1; x<arr.length; x++) {
    if(max < arr[x]) { // 'if(max < arr[x]); {' has semi colon, and results in
                       // DIFFERENT output, we get 2 instead of 6.
      max = arr[x];
    }
  }
  console.log(max);
}

findMax([1, 6, 3, 2]);

// Let's explain why having a semi colon after the round brackets above gives is
// a different output.

// According to (https://www.codecademy.com/blog/78) 'a semicolon after the round
// backets of an if, for, while, or switch statment is a bad idea'. As is demonstrated
// below.

// if (0 === 1); {alert("hi")}

// Code above will alert "hi", but not because 0 === 1, but because of the semicolon.
// It makes JS think that you have an empty statement there, and everything to the
// right of it is treated as no longer belonging to the 'if' conditional and thus
// independent of it.

// Function that gets the avergae of multiple elements in an array

function findAvg(arr) {
  var sum = 0; // Can't use var sum = ''; because then it'll be a string and
               // we wouldn't have been able to do arithmetic to add up elements
  for(var x = 0; x<arr.length; x++) {
      sum += arr[x];
  }
  console.log(sum/arr.length);
}

findAvg([1, 6, 3, 2]);

// Function to get an array of odd numbers

function oddNumbers() {
  var arr = [];
  for(var x = 1; x < 51; x++) {
    if(x % 2 != 0) {
      arr.push(x);
    }
  }
  console.log(arr)
}

oddNumbers()

// Function that takes an array and returns the number of values that are greater
// than a specific number, Y in this problem.

function greaterY(arr, Y) {
  countarr = [];
  for(var x = 0; x < arr.length; x++) {
    if(arr[x] > Y) {
      countarr.push(arr[x]);
    }
  }
  console.log(countarr.length);
}

greaterY([1, 2, 3, 4, 5, 7, 11], 3) // Outputs 4

// There's an easier way to do the problem above:

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

// Function that returns a new array with the SQUARED values of elements of array
// passed in.

function square(arr) {
var squarearr = [];
var sqvalue = 0;
for(var x = 0; x < arr.length; x++) {
  sqvalue = arr[x] * arr[x];
  squarearr[x] = sqvalue;
}
  console.log(squarearr);
}

square([2, 3, 4, 5])

// There's an easier way to do what's above... if you want to just MODIFY the array
// you originally passed in, and DON'T WANT A NEW SEPARATE ARRAY with squared values.

function square(arr) {
  for(var x = 0; x < arr.length; x++) {
    arr[x] = arr[x] * arr[x]
  }
  console.log(arr)
}

square([6, 7, 8, 9])

// Function that replaces negative integers in an array with zeros.

function noNeg(arr) {
for(var x = 0; x < arr.length; x++) { // For some reason this will also work
                                      // without 'var'...
  if(arr[x] < 0) {
    arr[x] = 0;
  }
}
  console.log(arr);
}

noNeg([-2, 1, 2, 3, -6])

// Function that returns a new array containing the MAX, MIN, and AVG of the
// array passed in.

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
