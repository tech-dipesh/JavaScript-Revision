let List=new Map()

List.set({2: 5})

for(let l of List){
  console.log(l);
}



let newMap=new Map([[2, "List"], [3, "newValue"], ["Key Value", 23], ])


for(let l of List){
  console.log(newMap);
}



newMap.forEach(c=>console.log(c))