const fetchData=()=>{

  fetch("https://google.com")
  .then((val)=>{
        return val;
  })
  .catch(c=>{
    return c;
  })
  
}


console.log(fetchData());


// Better way to define it:
async function fetchDatawithAsyncAwait() {
  let Value=await fetch("https://api.example.com/data");
  let convertToText=await Value.text();
  console.log(convertToText);
}
console.log(fetchDatawithAsyncAwait());