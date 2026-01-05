
let spreadFunction=(a, b, c, d)=>{
  let divide=0;
  divide+=a, divide+=b, divide+=c, divide+=d;
  return divide;
}
let arr=[2, 82, 16, 73]
console.log(spreadFunction(...arr));
