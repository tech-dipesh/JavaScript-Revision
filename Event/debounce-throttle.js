// When we only do after typing enteir things that's called the debounce but when it interrupt middle of we reset a timer.

// When user hit new request we start form 0 for that certain TimeRanges if not new request on certain TimeRanges then we only hit the api call, this is the debounce.



function searchSomething(val){
  console.log(`Searching, ${val}`)
}


searchSomething("T")
searchSomething("Ty")
searchSomething("Typ")
searchSomething("Typi")
searchSomething("Typin")
searchSomething("Typing")
searchSomething("Typing ")




// # throttle mean how much call you do during that TimeRanges that call will be ignored which calls the throttle.
// like you're asking for salary mid of month that's ignored until last of the month.



// Throttle use case is when we type comment on teh youtube and have 60 sec timer, if we commetn anything multiple tiems on 60 sec that'll be ignored.

