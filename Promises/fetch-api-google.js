let nameId=document.getElementById("nameId")

fetch("https://google.com")
.then(response=>{
  if(!response.ok) throw new Error (`Response Request Error ${response.statusText}`)
    else return response.text()
  })
.then((value)=> nameId.innerHTML(value))
.catch((output)=>console.log(output))