// Can access the name function but not secondName due to hoisting.


Name()
secondName()
function Name(){
  console.log("Name is called.");
}


const secondName=function(){
  console.log("Second Name is called.");
}