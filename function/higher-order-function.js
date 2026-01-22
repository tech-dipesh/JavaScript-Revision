// Write a dry approach of find teh diameter, radius and area:

// area=pi*r^2
// circum=2*pi*r
// diaemetr=2*r
const array=[2, 5, 1, 9, 7, 3, 7]

const calculateArea=((eachArray)=>{
    return Math.PI*eachArray*eachArray;
})


const calculateDiameter=((eachArray)=>{
  return 2*eachArray;
})

const calculateCircumfarence=((eachArray)=>{
  return 2*Math.PI*eachArray;
})


const doAll3=((array, eachLogic)=>{
    const newArray=[]
    for(let i=0;i<array.length;i++){
      newArray.push(eachLogic[i]);
    }
    return newArray;
})



console.log(doAll3(array, calculateArea));
console.log(doAll3(array, calculateDiameter));
console.log(doAll3(array, calculateCircumfarence));