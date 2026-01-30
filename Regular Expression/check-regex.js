let GivenString="This is can the regex checking value let's see whether regex the js can able to regex capture what am i looking for."
// let checkRegex=/[a-zA-z]{0, 3}/
// let checkRegex=/regex/g
let checkRegex=/[a-z]{3,}/g
let matchCheck=GivenString.match(checkRegex)
console.log(matchCheck);
