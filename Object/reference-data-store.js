let University={
  studentList: 283,
  topperName: "Anish giri",
  bestTeacher: "Rohan Sharma",
  areaOfUniversity: 19832,
  isSafe: true
}


let list1=23;
let list2=list1;


let copyObject=University;

University.studentList=999
console.log(list2);

console.log(copyObject.studentList);

copyObject.studentList=244
console.log(copyObject.studentList);

University.studentList=132
console.log(University.studentList);
