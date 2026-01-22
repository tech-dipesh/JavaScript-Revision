const storeValue=(firstValue)=>{
    console.log("first Upper is called.");
    console.log(firstValue);
}

storeValue(function (){

})


// Also poosible this ways:



const secondTime=(param)=>{
  console.log(param);
}


function helperFunction(){
  console.log("Helper is called.");
}
secondTime(helperFunction)



// Can also return it:
const third=()=>{
  return function(){
    
  }
}

console.log(third());