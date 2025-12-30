let arr=[2, 82, 16, 72, 34, 21, 64, 45]

// let storeRes=arr.filter(a=>{
//     return a>30;
// })
// console.log(storeRes);

function filterLogic(f){
    return f%3==0;
}

const filteredGivenWithdivisibleBy3=arr.filter(filterLogic)

console.log(filteredGivenWithdivisibleBy3);