let arr=[2, 82, 16, 73, 34, 23, 64, 59]

Array.prototype.calculateArray=(()=>{
    let newArray=[]
    for(let i=0;i<arr.length;i++){
      newArray.push(arr[i]/3)
    }
    return newArray;
})

console.log(arr.calculateArray());


// Also can do the .map
console.log(arr.map());