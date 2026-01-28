function Ab(){
    console.log("Inside a ab function is called.");
}

const yz=()=>{
  console.log("This is the yz function.");
}

Ab(function yz(){
  console.log("This is the ab called.");
})