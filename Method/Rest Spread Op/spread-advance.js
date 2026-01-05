const arr=[2, 9, 10, 1, 29, 30, 18, 50, 5, 21, 25, 30, 14, 35];
const doSomemagic=(first, second, ...restSpread)=>{
    let sum=restSpread.reduce((p, zero)=>p*zero, 1);
    return first*second*sum;
}

console.log(...arr)



console.log(doSomemagic(...arr));




// spread operator can create a new array:
const copyArray=[...arr]
console.log(copyArray);


// Spread doesn't allow to modify the original array.
arr[1]=99;
console.log(copyArray);



// With the spred operator we can even spread out th operator of like div.


const allDiv=[...document.querySelectorAll("div")]
// Can do all the array lis.