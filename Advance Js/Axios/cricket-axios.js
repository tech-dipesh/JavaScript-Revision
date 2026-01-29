
let mySportsApi="sp7wHLR8jgKTEiY3XxrAtNggW7jay3p80sxSXneyZJnz3eozax3S4GmeJsyM"
// Correct format should be:
// let apiKey = "d4315eff-07d5-4246-845d-6fdaffd4f8c6";
// let url = `https://api.crickapi.com/v1/cricketScore?apiKey=${apiKey}`;
let url=`https://cricket.sportmonks.com/api/v2.0/leagues?api_token=${mySportsApi}`


axios.get(url)
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.log(error.message);
    console.log('url', error.config?.url);
    console.log("message", error);
    
    // Tary to open the URL in browser manually
    window.open(url, '_blank');
  });