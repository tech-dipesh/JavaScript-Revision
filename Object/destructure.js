const objectValue={
  name: "Dipesh",
  age: 20,
  Program: "Coding",
  fullAddress:{
    country: "Nepal",
    city:"butwal", 
    municipal:"bardaghat",
    stateCapital: "138113"
}
}

// Normal Way of access name and age:
// console.log(objectValue.name, objectValue.age);

// ed6 module destructure:
const {name, age}=objectValue;
console.log(name, age);



// We can also change the name:
const {Program: programChange}=objectValue;
console.log(programChange);


const {fullAddress}=objectValue;
const {municipal}=fullAddress;
console.log(municipal);

// For even access the object inside value:

const {fullAddress:{city: cityDestructrure, stateCapital: stateNewCapital}}=objectValue;
console.log(cityDestructrure, " State new Capital ", stateNewCapital)



const {age: ageAlsoDefault="99"}=objectValue;
console.log(ageAlsoDefault);


// functoin access:

const Multiply=(y, z)=>{
  return {sum: y+z, product: y+z};
}


const [sum, product, power="Power Value"]=Multiply(10, 13)
console.log(sum, product, power);


