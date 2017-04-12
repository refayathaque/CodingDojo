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
