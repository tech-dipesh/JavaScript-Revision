function getEachIndex(...restoperator){
  restoperator.forEach((val)=>{
    console.log(val);
  })
}

let arr=[2, 82, 16, 73, 34, 23, 64, 59]
// getEachIndex(arr);


// Rest Operator use case:
const sumOperator=(...sum)=>{
  return sum.reduce((sumValue, startValue)=>sumValue+startValue, 0);
}


// console.log(sumOperator(98, 1234, 1234,323,4324 ,423, 143,41,23, 13, 24,112,3, 98,91,21, 34,2,  41, 23, 134,32, 34, 123,13, 31));


// Even in the object:


