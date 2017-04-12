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
for(var x = 0; x < array.length; x++) //for(var x=0; x<4; x++)
{
  for(var y = array.length-1; y >= x; y--) //for(var y=3; y>=x; y--)
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

//Function to get sum of even numbers from 1 to 1000
function get_even_numbers() {
  var sum = 0;
  for(var i = 1; i <= 1000; i++) { //or 'i < 1001'
    if(i % 2 == 0) { //for odd 'i % 2 != 0'
      sum += i; //Same as sum = sum + i
    }
  }
  console.log(sum); //250500
}
get_even_numbers();

console.log('----');

//Function to get sum of even numbers in a given array
function array_EvenSum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) { //Iterates with indexing
    if(arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  console.log(sum); //12
}
array_EvenSum([1, 2, 3, 4, 5, 6]);

console.log('----');

//Function to get sum of elements in a given array
function array_SumElements(arr) {
  var sum = '';
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i]; //Integer converts to String and is CONCATENATED
  }
  console.log(sum); //Hello1Goodbye2
}
array_SumElements(['Hello', 1, 'Goodbye', 2]);

console.log('----');

//Function to get highest number in a given array
function arr_Max(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(max < arr[i]) { //Can't compare w previous element
      max = arr[i]; //Updates (reassigns) var max
    }
  }
  console.log(max); //8
}
arr_Max([1, 4, 3, 2, 8, 6, -3]);

console.log('----');

//Function to get highest number in a given array with JS methods

function findMax(arr) {
  arr.sort(function(a, b){return a - b}); //MUTATES THE CALLER! Modifies arr
  console.log(arr.pop()); //8, pop method returns arrary's last element
}
findMax([1, 4, 3, 2, 8, 6, -3]);

console.log('----');

/* (https://www.codecademy.com/blog/78) 'a semicolon after the round
backets of an if, for, while, or switch statment is a bad idea'.

var x = 5
var y = 5
if (x === y); {alert("hi")}

Code above will alert "hi", NOT BC x === y, but bc of the semicolon. The ;
makes JS think that you have an EMPTY STATEMENT there, so everything to
the right of the ; becomes INDEPENDENT of the 'if' conditional. */

//Function to get the average of elements in a given array
function findAvg(arr) {
  var sum = 0;
  for(x = 0; x < arr.length; x++) {
    sum += arr[x]
  }
  console.log(sum/arr.length) //2.5
}
findAvg([1, 2, 3, 4])

console.log('----');

//Function to get an array of odd numbers in a given array
function arrOdd(arr) {
  oddarr = [];
  for(var x = 0; x < arr.length; x++) {
    if(arr[x] % 2 != 0) {
      oddarr.push(arr[x]);
    }
  }
  console.log(oddarr); //[1, 3, 5, 7]
}
arrOdd([1, 2, 3, 4, 5, 6, 7, 8])
// Without passing in an array...
function oddArr() {
  arr = [];
  for(x = 1; x <= 8; x++) {
    if(x % 2 != 0) {
      arr.push(x);
    }
  }
  console.log(arr); //[1, 3, 5, 7]
}
oddArr();

console.log('----');

//Function to get elements in a given array greater than a passed value.
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
// Without printing in array form...
function greaterthanValue(arr, y) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > y) {
      console.log(arr[i]); //8, 5
    }
  }
}
greaterthanValue([1, 2, 8, 3, 5], 4)

console.log('----');

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
