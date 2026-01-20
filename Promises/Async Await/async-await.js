
async function Value(){
  let Data=await fetch("https://api.example.data.com/data")
  let Value=await Data.text();
  return Value;
}

console.log(Value());