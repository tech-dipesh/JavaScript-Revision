// let submitButton=document.getElementById("sub");
// console.log(submitButton);
let submitButton = document.getElementById("sub")
// .
// let submitButton=document.getElementById("sub")
submitButton.addEventListener("click", () => {
  let inputVal = document.getElementsByTagName("input").value;
  
  try {
    if (NaN(inputVal)) {
      throw new Error("String is unaccaptable");
    }
    let divValue = document.querySelector("div");
    divValue.innerHTML = inputVal * 3;
  } catch (error) {
    let divValue = document.querySelector("div");
    divValue.innerHTML = error;
  }
});
