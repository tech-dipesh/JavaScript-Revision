
const timeSet=function(){
  console.log("It'll be print a certain thing after the 1000 millisecond you can check that");
}

console.log("Before SetTimeout");
setTimeout(timeSet, 1000);
console.log("After SetTimeout");

console.log("Before second SetTimeout");
const justBefore=function(){
  console.log("On 999 millisecond time.");
}
setTimeout(justBefore, 999);
console.log("After second SetTimeout");