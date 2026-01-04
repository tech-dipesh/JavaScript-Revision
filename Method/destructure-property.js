
let Age=20;
let objectList = {
  name: "Dipesh Sharma",
  hometown: "Baglunge Thito",
  Passion: "Software Development",
  Age: Age,
  isNepali: true,
  isModern: false,
};

console.log(objectList.Age);


// Destructure Propery Way:

let Passion= "Software Engiineering"
let newList = {
  name: "Dipesh Sharma",
  hometown: "Baglunge Thito",
  Passion,
  isNepali: true,
  isModern: false,
};


console.log(newList.Passion);