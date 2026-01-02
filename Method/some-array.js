let arr=[2, 82, 16, 73, 34, 23, 64, 59]

arr.some(s=>{
  if(s==82){
    return;
  }
  console.log(s);
})