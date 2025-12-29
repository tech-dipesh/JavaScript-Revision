// Rather Than Giving the name with the .operator of same naming on above we can just make declare it can define it.



let fName="He's from the world, trying to explore as much as he want.";
let hometown="he live in where he used to be"
let objectList = {
  fName,
  hometown,
  Passion: "Software Development",
  Age: 20,
  isNepali: true,
  isModern: false,
};



// console.log(objectList[fName]);
console.log(objectList.fName);


// Adding a above value to the object some variable.
const originalRight="Right To Change";
const needRight="Maybe"

let makeObject={
  [needRight]: originalRight,
  areaOfService: "Europe",
  // doSomeMagic: function () {console.log("you're topper.")};
  // can work this above:
  doSomeMagic(){
    console.log("You're topper");
  },
  [`can Declare Normal Js ${objectList.isNepali}`]: "False"
}


console.log(makeObject.doSomeMagic);
// Instead belowe we can do 
// makeObject[needRight]=originalRight;
console.log(makeObject[needRight]);
console.log(makeObject);