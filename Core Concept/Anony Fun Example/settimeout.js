(function(){
  console.log("This is the anonymous function code.");
})()


// Variable assign
const val=function(){

}

function names() {
  console.log("Testing feature first time settimeout after long teim");
}

// setTimeout(names(), 1000);
setTimeout(()=>{
  console.log("Output is printed");
}, 3000)

names()


