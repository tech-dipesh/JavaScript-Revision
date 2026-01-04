let objectList = {
  name: "Dipesh Sharma",
  hometown: "Baglunge Thito",
  Passion: "Software Development",
  Age: 20,
};

// Normal ways:
let updatedHometown=objectList.hometown="Butwal"

let objectAge=objectList.Age
let{ Age, hometown, Passion}=objectList;
console.log(updatedHometown);
console.log(Age, hometown, Passion);

