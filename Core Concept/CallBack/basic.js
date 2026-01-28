Greet=(names)=>{
  console.log("Your name is: ", names);
}

processtheInputShowOutput=(callback)=>{
  let nam=prompt("Please enter your name to print: ")
  callback(nam)
}

processtheInputShowOutput(Greet);