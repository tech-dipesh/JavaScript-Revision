// Generally we don't need to create a promise as api will handle,
let Promises=new Promise((resolve, reject, complete)=>{
  if(resolve){
    // console.log("It's resolved Successfully.");
    resolve("It's resolved Successfully.")
  }
  else if(reject){
    reject("It's resolved Successfully.")
    // console.log("Sorryt it can't complete.");
  }
  else if(complete){
    // console.log("It's run on the else condition.");
    complete("It's run on the else condition.")
  }
})