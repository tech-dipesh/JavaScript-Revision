import {first, second} from "./concept1.js"

const checkWhetherEligibleOrNot=(e)=>{
  if(e>18 && e<90){
    console.log("Yes you're eligible.");
  }
  console.log("No you're not eligible.");
}


const genderCheck=(g=>{
  if(g=="Male"){
    console.log("You're male.");
  }
  else if(g=="Female"){
    console.log("You're Female");
  }
  else{
    console.log("We don't accept a third gender.");
  }
})




