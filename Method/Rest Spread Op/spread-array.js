let arr=[2, 82, 16, 73, 34, 23, 'String', true]


let arr2=[arr]
console.log(arr2.length);


// When we try to copy a array it can't be possible:
let arr1=[2, 82, 16, 73, 34, 23, 'String', true]
let arr3=[...arr1]
console.log(arr3.length);


// now create another array with also their value:
let arr4=[...arr1, 9, 10]
console.log(arr4);