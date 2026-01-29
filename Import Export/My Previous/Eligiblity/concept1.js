let Age=document.getElementById("Age")
let Gender=document.getElementById("Gender");
// export {Age, Gender}
export default {Age, Gender};

document.getElementById('Display').addEventListener('click', (e)=>{
  console.log("Display select.");
})