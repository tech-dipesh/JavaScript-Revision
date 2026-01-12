const ownPromise=new Promise((resolveState, rejectState)=>{
  const mathRandom=Math.random(3, 9);
  if(mathRandom>1){
    rejectState("Reject Stte")
  }
  else{
    resolveState("Resolve State")
  }
  // resolveState("State Valu")
})

ownPromise.then ((t)=>{
    console.log(t);
}).catch((c)=>{
  console.log(c);
}).finally((finallyState)=>{
  console.log(finallyState);
})