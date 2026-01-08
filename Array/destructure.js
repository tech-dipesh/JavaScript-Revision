
let array=["DipeshJi", "RamunJi", "Nepal", "world", "Germany"];

// Break down pieces the array into a single element can name anythin on the name array.
let [first, second]=array;
console.log(first);
console.log(second);



// For avoiding the any value use comma to how much we want to avoid.
const [, , , fourth, fifth]=array;
console.log(fourth);
console.log(fifth);



// Also useful on the multiple value store:
const doOperationForDEstructrure=(a, b)=>{
  return (a*b)+a+b;
}


const numOfArray=[2, 9, 98, 23, 123, 21, 29, 415, 51, 335, 123]
const [, firstArray, , secondArray]=numOfArray;
console.log(firstArray, secondArray);


// const [firstDestructure, secondDestructure]=doOperationForDEstructrure(firstArray, secondArray);
const firstDestructure=doOperationForDEstructrure(firstArray, secondArray)

console.log(firstDestructure);
// console.log(secondDestructure);

// Default Param:
const [, secondAlsoDefault="New Raman"]=array;
console.log(secondAlsoDefault);


// Accessing the nested array:
const nestedArray=[2, 4, [9, 16, 25], 36, 49];

const [, , [accessFirst, , accessNestedLast]]=nestedArray;
console.log(accessFirst, accessNestedLast);




// Print first and last Name:
const printFirstandLastName=(fullname)=>{
  const [firstName, lastName]=fullname.split(' ')
  return {firstName, lastName}
}

const {firstName, lastName}=printFirstandLastName("Dipesh Sharma")
console.log(firstName, lastName);