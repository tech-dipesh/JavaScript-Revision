console.log(new Date().toUTCString());
console.log(new Date());

console.log(new Date().getDate());
console.log(new Date().getTime());
console.log(new Date().getTimezoneOffset());


  console.log(new Date().toLocaleTimeString());

console.log(new Date().getFullYear());


const date=new Date()
const year=date.getFullYear();
const month=date.getMonth()+1;
const day=date.getDate();
console.log(year, month, day);
