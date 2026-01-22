// on the default param the null coalsecing can override the null or undefined, not much useful but when if any value exist on the right side, it'll add the left side value.
const constprintDetail=((codingRank, totalCodeRun, isMaster=codingRank ?? "Even coding rank doesn't exist.")=>{
  return `He's Rank is: ${codingRank}, Total Code Run is: ${totalCodeRun}, and he's the mmaster of: ${isMaster}`
})


console.log(constprintDetail(231, 2));



// PI single mean;
// Run left side if not underinfed/null or run right side.


console.log(undefined??true);


console.log(false ?? true);

console.log( undefined ?? "Run the right side.");