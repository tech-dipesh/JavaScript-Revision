
let arr = [2, 82, 16, 73, 34, 23, 64, 59];

let objectList = [
  {
  names: "Dipesh Sharma",
  hometown: "Baglunge Thito",
  Passion: "Software Development",
  mark: [
    {
    roll: 23,
    class: 12,
    id: 2342,
  },
  { 
    roll: 23,
    class: 12,
    id: 2342,
  },
  { 
    roll: 23,
    class: 12,
    id: 2342,
  },
  { 
    roll: 23,
    class: 12,
    id: 2342,
  }],
  Age: 20,
  isNepali: true,
  isModern: false,

},
  {
  
  names: "Dipesh Sharma",
  hometown: "Baglunge Thito",
  Passion: "Software Development",
  mark: [
    {
    roll: 23,
    class: 12,
    id: 2342,
  },
  { 
    roll: 23,
    class: 12,
    id: 2342,
  },
  { 
    roll: 23,
    class: 12,
    id: 2342,
  },
  { 
    roll: 23,
    class: 12,
    id: 2342,
  }],
  Age: 20,
  isNepali: true,
  isModern: false,

},
  {
  
  names: "Dipesh Sharma",
  hometown: "Baglunge Thito",
  Passion: "Software Development",
  mark: [
    {
    roll: 23,
    class: 12,
    id: 2342,
  },
  { 
    roll: 23,
    class: 12,
    id: 2342,
  },
  { 
    roll: 23,
    class: 12,
    id: 2342,
  },
  { 
    roll: 23,
    class: 12,
    id: 2342,
  }],
  Age: 20,
  isNepali: true,
  isModern: false,

},
  
]


// const [first, second, third]=objectList;
// const {names}=first;
// const {ames}=second;
// const {ams}=third;
// console.log(names, ames, ams);


// for(let i=0;i<objectList.length;i++){
//   console.log(objectList[i].names)
// }

// const mapValue=objectList.map(m=>m.names)

// console.log(mapValue);
// objectList.forEach(f=>{
//   console.log(f.names);
// })


// for(let i of objectList){
//   console.log(i.names);
// }


// objectList.forEach(f=>{
//   let totalMarks=0;
//   const totalMark=f.mark;
//   totalMark.forEach(f=>{
//     totalMarks+=f;
//   })
//   console.log(totalMarks)
// })




objectList.forEach(f=>{
  // console.log(f.mark.id);
  // console.log(typeof f.mark);
  // console.log(f.mark);
  f.mark.forEach(f=>{
    console.log(f.id);
  })
  // f.mark(val=>{
    // console.log(val.id)
  // })
})