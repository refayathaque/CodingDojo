function greetSomeone(person){
  var person1 = person.toLowerCase();
  if (person1 == "refayat"){console.log("Hey there Refayat!");}
  else {console.log("Hey there other guy!");}
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
