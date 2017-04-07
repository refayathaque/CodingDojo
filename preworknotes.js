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
  for(var x = 0; x<arr.length; x++) {
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
