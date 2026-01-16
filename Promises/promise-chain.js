console.log("Testing whether promise chain is working or not.");


let PromiseTesting=new Promise((resolveState, rejectSTate)=>{
  let mathRandom=Math.random(10, 39)
  if(mathRandom>35){
      rejectSTate("Sorry Our site is under maintainance please try again later.")
  }
  else{
    setTimeout(() => {
      console.log("Succussfully Complted the prompt chainig.");
      resolveState("successfully Set Timouet First")
    }, 1000);
  }
})

let SEcondPromise=new Promise((resolveState, rejectSTate)=>{
  let mathRandom=Math.random(10, 39)
  if(mathRandom>35){
      rejectSTate("Sorry Our site is under maintainance please try again later, second maintainance.")
  }
  else{
    setTimeout(() => {
      console.log(" SEcond Succussfully Complted the prompt chainig.");
      resolveState("successfully Set Timouet Second")
    }, 1000);
  }
})


let thirdPromiseChain=Promise.all([PromiseTesting, SEcondPromise]);

thirdPromiseChain.then(t=>{
    console.log(t);
})

thirdPromiseChain.catch(c=>{
  console.log(c);
})

thirdPromiseChain.finally(()=>{
  console.log("Succussfully State");
})