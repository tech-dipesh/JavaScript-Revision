// This only check the start and end part of the regular expression js.
let checkStartEnd=dipesh=>{
  const c=/^[dipesh]$/g
  return dipesh.match(c);
}


console.log(checkStartEnd("dipeshsharmaji"));
console.log(checkStartEnd("bikashdoxt"));
console.log(checkStartEnd("rojan@gmail.com"));