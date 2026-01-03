const Array=[
  {firstName: "Dipesh", lastName: "Sharma", age: 20, profession: "Developer"},
  {firstName: "Homnath", lastName: "Kharel", age: 20, profession: "Cook"},
  {firstName: "Pradip", lastName: "Magar", age: 20, profession: "Cook Head"},
  {firstName: "Ashish", lastName: "Sharma", age: 20, profession: "Cricketer"},
  {firstName: "Sagar", lastName: "Subedi", age: 20, profession: "teacher"},
  {firstName: "Rajesh", lastName: "Khatri", age: 20, profession: "Constructor"},
  {firstName: "Ocean", lastName: "Poudel", age: 20, profession: "Senior"}
]


function Merge(m){
  return m.firstName+m.lastName;
}

// Join firstname and lastName with map:
const storeFirstAndLastName=Array.map(Merge)

console.log(storeFirstAndLastName);