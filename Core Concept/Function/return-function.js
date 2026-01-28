
function IsValid(isPerson,  Value){
  if(isPerson>=80 && Value>=50){
    // console.log("Both are true");
    return "Both are True";
  console.log("This neve run as after return");
  } 
  else{
    return "Eitheer false or both false"
  }
}
let isPerson=90
let Value=58


let secondIs=40
let secondT=60

console.log(IsValid(isPerson, Value));
console.log(IsValid(secondIs, secondT));