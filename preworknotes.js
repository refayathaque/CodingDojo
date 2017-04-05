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
      var temp = array[y];
      array[y] = array[x];
      array[x] = temp;
    }
  }
}

console.log(array) // Outputs [1, 3, 4, 5], no idea how...
