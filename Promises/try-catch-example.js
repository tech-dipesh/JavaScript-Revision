try {
  // let Value=Math.random(20, 100)
  let Value=Math.random(10, 20)
  if(Value>0.50){
    throw new Error ("Number can't be mroe than 50")
  }
  console.log(`number is correct ${Value}`);
} catch (error) {
  console.log(error);
}