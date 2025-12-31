// const arrays=new Array(20).fill(Math.floor(Math.random()*100));

// arrays.map((m)=>console.log(m))
// console.log(arrays.length);


let arr=[2, 82, 16, 1 , 10, 1073, 34, 23, 64, 59]
arr.sort();
//rrconsole.log(arr);




// Above is not the best sorting appraoch that we use:
let ar=[2, 82, 16, 73, 34, 23, 64, 59]


ar.sort((a, b)=>a-b);
console.log(ar);