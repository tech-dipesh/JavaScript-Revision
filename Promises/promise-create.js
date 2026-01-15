
let promiseHandleState=new Promise((resolve, reject)=>{
  let Value=Math.random(1, 90)
if(Value>20){
  reject("The Promise is rejected.")
}
console.log("we can take exmaplef for the free state.");
  setTimeout(() => {
    console.log("Timeout is happend");
    resolve("This is the testing promise creation.")
  }, 2000);
})

promiseHandleState.then((a)=>{
    console.log(a);
})
promiseHandleState.catch((b)=>{
  console.log(b);
})