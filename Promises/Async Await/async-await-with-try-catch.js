try {
  // Better way to define it:
  async function fetchDatawithAsyncAwait() {
    let Value=await fetch("https://api.example.com/data");
    if(!Value.ok) throw new Error (`Value is doesn't exist ${Value.statusText}`)
    let convertToText=await Value.text();
    console.log(convertToText);
  }
  console.log(fetchDatawithAsyncAwait());
} catch (error) {
  console.log(error);
}



fetchDatawithAsyncAwait()