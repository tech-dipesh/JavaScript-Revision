let arr=[
  {name:"adf;", isPresent: true},
  {name:"ajkdf;aj;", isPresent: false},
  {name:"jsd;a;", isPresent: true},
  {name:"adjsdfjf;", isPresent: false},
  {name:"jsdj;", isPresent: true},
  {name:"sjdf;", isPresent: false},
  {name:"sdj;", isPresent: true},
]


arr.forEach(e => {
  if(e.isPresent==true){
    console.log(e.name)
  }
});

let storeObj={
  name:"Dipen",
  isPresent: true
}
arr.push(storeObj)


arr.forEach((e)=>{
  console.log(e)
})