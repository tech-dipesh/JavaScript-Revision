console.log("Testing a fetch api:");


fetch("https://jsonplaceholder.typicode.com/posts")
.then((fetchRespons)=>{
  if(!fetchRespons.ok){
    throw new Error ("Throw state respones"+fetchRespons.statusText)
  }
})
.then((t)=>{
  console.log(t);
})
.catch(f=>{
  console.log(f);
})
.finally(()=>{
  console.log("Run iresepctive whether it runs or not");
})