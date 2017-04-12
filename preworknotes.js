//NOTES FROM PREWORK ALGORITHM CHALLENGES

//Function printing strings based on conditional
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
greetSomeone("Refayat") //Hey there Refayat!
greetSomeone("refayat") //Hey there Refayat!
greetSomeone("George") //Hey there other guy!

console.log('----');

//Function printing string passed in
function printMyName(name){
  console.log(name);
}
printMyName('Refayat'); //Refayat

var othername = printMyName('Harry'); //Harry
console.log(othername); //Undefined..not sure why
//Bc function call can't be assigned to var?

console.log('----');

//Most difficult Algorithm Challenge
var array = [5, 3, 4, 1];
for(var x=0; x<array.length; x++) //for(var x=0; x<4; x++)
{
  for(var y=array.length-1; y>=x; y--) //for(var y=3; y>=x; y--)
  {
    if(array[x] > array[y])
    {
      var temp = array[y]; //MUTATES THE CALLER! Modifies 'var array'
      array[y] = array[x];
      array[x] = temp;
    }
  }
}
console.log(array) //[1, 3, 4, 5]

console.log('----');

//Function CONCATENATING integers
var number = ''; //Empty STRING
var x = 5;
while (x < 10)
{
  number += x; //String CONCATENATION
  x++;
}
console.log(number); //STRING '56789'

console.log('----');

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

// Another example of a function getting the sum of a set of even numbers.

function sum_even(arr){
  var sum = 0;
  for(var x = 9; x < 88; x++){
    if(x % 2 == 0){
    sum += x;
    }
  }
console.log(sum);
}

sum_even([]);

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
var sum = 0; // Must be changed to 'var sum = arr[0]' is same loop is used
var avg = 0; // Can also just initialize array and populate it by
             // doing 'var avg = sum/arr.length;'.
var max = arr[0];
var min = arr[0];
var newarr = []; // Can also just initialize array and populate it by
                 // doing 'var newarr = [max, min, avg];'.
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
newarr.push(max, min, avg); // Can also just initialize array and populate it by
                            // doing 'var newarr = [max, min, avg];'.
console.log(newarr);
}
maxMinAvg([1, 2, 3, 4, 5, 6]);

// Refactoring the code above... We can just have one for loop since they're all
// the same.

function maxMinAvg(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i];
    }
    if(min > arr[i]) {
      min = arr[i];
    }
    sum += arr[i];
  }
  var avg = sum/arr.length; // var can't be initialized above with other variables,
                            // 'sum' is being modified by code in for loop, so this
                            // has to be initialized AFTER the for loop.
  var newarr = [max, min, avg];
  console.log(newarr);
}

maxMinAvg([1, 2, 3, 4, 5, 6]);

// Function that swaps the first and last values of an array passed.

function swap(arr) {
  var swaptemp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = swaptemp;
  console.log(arr);
}

swap([8, 7, 5, 2])

// Function that replaces negative integers in array with string.

function swapwithstring(arr) {
for(var x = 0; x < arr.length; x++) {
  if(arr[x] < 0) {
    arr[x] = 'Dojo'
  }
}
  console.log(arr);
}

swapwithstring([1, -2, 3, -4])

// Function that goes through a range of numbers and gives the sum of all
// odd numbers

function sum_odd(arr) {
  var sum = 0;
  for(var i = 3; i < 10; i++) {
    if(i % 2 != 0) {
      sum += i;
    }
  }
  console.log(sum); // Outputs 24
}

sum_odd([0]);

// Example of 'break'; it exits out of the entire loop. It won't continue
// iterations if inside a for loop block, will only execute the first iteration.

for(var x = 17; x > 7; x--)
{
  console.log(x); // Outputs 17
  break;
}
