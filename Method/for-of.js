let arr=[2, 82, 16, 73, 34, 23, 64, 59]


for(let i of arr){
  console.log(i);
}



// For Print a index also:


for(let [index, value] of arr.entries()){
  console.log(index, value);
}