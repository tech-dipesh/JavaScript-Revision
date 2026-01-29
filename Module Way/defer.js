// defineOnGlobalSpace="This is the Intersting things."

// console.log(defineOnGlobalSpace)





count = 0; 

function increment() {
  count++; 
  result = count*3; 
  console.log(result);
}

increment();  
increment(); 

console.log(count, window.result); 



functionCall=()=>{
  yourFunctionName="This is inside the function call";
}

functionCall()
console.log(yourFunctionName);