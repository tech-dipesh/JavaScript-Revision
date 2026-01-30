let text=document.getElementById('text');
let result=document.getElementById('result');



const updateTheDebounceinGivenTime=deboucnce((deboucnevalue)=>{
  result.innerText=deboucnevalue
})



text.addEventListener("input", (e)=>{
  // result.innerText=e.target.value;
  updateTheDebounceinGivenTime(e.target.value)
})



function deboucnce(callback, totaldelay=100){
  let totaltime;
 return (..args)=>{
  clearTimeout(totaltime)
  setTimeout(() => {
  }, totaldelay);
 }
}