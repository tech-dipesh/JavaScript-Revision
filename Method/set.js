const setList=new Set([2, 2, 4, 6, 7, 8, 9])

// for(let i of setList){
//   console.log(i);
// }

setList.add(9)

setList.forEach(f=> console.log(f));




console.log(setList.has(3));


console.log(setList.size);

const copyWithSpread=[...setList]

console.log(copyWithSpread);