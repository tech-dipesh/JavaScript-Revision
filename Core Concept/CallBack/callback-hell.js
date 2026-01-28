setTimeout(() => {
  console.log("First Call Back Hell");
  setTimeout(() => {
    console.log("Second Call Back Hell");
  }, 500);
  setTimeout(() => {
    console.log("Third Call Back Hell");
  }, 500);
  setTimeout(() => {
    console.log("Fourth Call Back Hell");
  }, 500);
  setTimeout(() => {
    console.log("Fifth Call Back Hell");
  }, 500);
  setTimeout(() => {
    console.log("Sixth Call Back Hell");
  }, 500);
  setTimeout(() => {
    console.log("Seventh Call Back Hell");
  }, 500);
  setTimeout(() => {
    console.log("Eighth Call Back Hell");
  }, 500);
  setTimeout(() => {
    console.log("Ninth Call Back Hell");
  }, 500);
}, 500);


console.log("outside the call stack");
console.log("outside the second call stack");