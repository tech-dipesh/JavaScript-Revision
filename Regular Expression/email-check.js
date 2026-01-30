const checkMail=c=>{
  // const regex=/^[^!#%&*()*~_+-=?/\'@]+[]/
  // return c.test(regex);
  // return /^[~`!@#$%^&*()_+=-|/?]+[]/.test(c)
  return /^\S+@\S+\.\S+$/.test(c)
}



let e="dipesh@gmail.com"
let em="_sharma@@gmail.com"
let ema="*_3892.com"
let emai="929730@gmail.com"
let email="d9283.@gmail.com";


console.log(checkMail(e));
console.log(checkMail(em));
console.log(checkMail(ema));
console.log(checkMail(emai));
console.log(checkMail(email));
