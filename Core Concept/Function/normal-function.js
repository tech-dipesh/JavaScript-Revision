
function IsValid(isPerson,  Value){
  if(isPerson>=80 && Value>=50){
    console.log("Both are true");
  }
  else{
    console.log("Eitheer false or both false");
  }
}
let isPerson=90
let Value=58


let secondIs=40
let secondT=60

IsValid(isPerson, Value);
IsValid(secondIs, secondT);