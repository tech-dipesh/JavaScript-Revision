import { generateFromEmail, generateUsername } from "unique-username-generator";


let printEmail=generateUsername();
console.log(printEmail);



document.querySelector("div").innerText=printEmail
