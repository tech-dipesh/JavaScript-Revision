const Details={
  name: "Dipesh", 
  education:{
    primary: "Dhawalagari Primary class",
    secondary: "Raja Secondary School", 
    college: "Chitkara University"
  },
  // skills:{}
  skills: ["Js", "Cpp", "Typescript"],
  age: 20
};


console.log(Details?.age);
console.log(Details?.education?.college);
console.log(Details?.education?.phd);