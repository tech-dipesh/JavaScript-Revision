const PromiseState=new Promise((r, rej)=>{
  let val=Math.random(10, 50);
  if(val>5){
    r("This is the resolve state");
  }
  else{
    rej("This is the reject state.")
  }
})


PromiseState.then((j)=>{
  console.log(j);
})
PromiseState.catch((c)=>{
  console.log(c);
})

PromiseState.finally(()=>{
  console.log("This is the finally state");
})