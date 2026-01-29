// const axios = require('axios');   
// let url="https://swapi.co/api/people/1"

// let apiValue="d4315eff-07d5-4246-845d-6fdaffd4f8c6"

// axios.get(url)
// 	.then(result => result.json())
// 	.then(result => {
  // 		console.log("We have the result",result);
// 	})
// 	.catch(err => {
// 		console.log("An error occured. Please check your code",err);
// 	});


// let url="https://api.crickapi.com/v1/cricketScore?apiKey=d4315eff-07d5-4246-845d-6fdaffd4f8c6"
let createDiv=document.querySelector("div")
let url="https://jsonplaceholder.typicode.com/posts"
axios.get(url)
.then(v=>{
  console.log(v.data);
  createDiv.innerText=v[0].title;
})
.catch(c=>{
  console.log("error", c);
})
