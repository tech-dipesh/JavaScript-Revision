FunDo=()=>{
  return 2*99;  
}

console.log(FunDo());




// letThreeSum=function(one, two, three){
let letThreeSum=(one, two, three)=>{
  return one+two+three;
}

console.log(letThreeSum(23, 98, 52));



const noBracket=(test, yes) => test*yes/2;

console.log(noBracket(98725, 239));




// Single param:


const singleParam=single=>single*99;

console.log(singleParam(83));





const fetchDataFromInternet=data=>console.log("Data Recieved: ", data);
console.log(fetchDataFromInternet('https://wikipedia.org'));