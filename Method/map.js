let arr=[2, 82, 16, 73, 34, 23, 64, 59]

// arr.map((j)=>{
//   console.log(j+3);
// })



// Map is useful when we want to transform a given array.

const operation=((a)=>{
  return a/2;
})


let storeDivideBy2=arr.map(operation)

console.log(storeDivideBy2);

// When we want to convert into a binary we just do: .toString(2) with base 2 that's it.




function convertToBinary(b) {
  return b.toString(2);
}


const storeBinary=arr.map(convertToBinary)

console.log(storeBinary);