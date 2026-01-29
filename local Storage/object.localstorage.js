let int = document.getElementById("int");
let submit = document.getElementById("submit");
let div = document.querySelector("div");
let count = 1;

// let objectStore={
//     inputVal: '',
//     currentTime: ''
// }

// For stre on the array:
submit.addEventListener("click", () => {
  if (int == "") {
    alert("Value can't be blank.");
    return;
  }
  saveallTodo();
});


const saveallTodo=()=>{
    // let exactTime = new Date().toLocaleTimeString();
    let taskinArray=[];
    let storeallData=localStorage.setItem("task", JSON.stringify(int.value));
    storeallData.forEach(element => {
          taskinArray.push(element)
    });


  // let conversionValue = JSON.stringify("int.Value", exactTime);
  // localStorage.setItem(count, conversionValue);
}