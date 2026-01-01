// # reduce mean we've to take all out of array and come up with single element like sum, maxValue.
let arr=[2, 82, 16, 73, 34, 23, 64, 59]

// With reduce find the sum of all the value:
const sumWithReduce=arr.reduce((arcumlator, initialValue)=>{
  initialValue+=arcumlator;
// Initial value set:
  return initialValue
}, 0)


console.log(sumWithReduce);



// Find the max Value:

const maxReducee=arr.reduce((arcumlator, initialValue)=>{
  if(initialValue<arcumlator){
    initialValue=arcumlator;
  }
  return initialValue;
}, 0)


console.log(maxReducee);

