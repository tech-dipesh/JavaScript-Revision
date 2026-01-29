clearInterval help us to stop the setTimeOut that is keep running.

``` 
  let val=setInterval(=>{ if(count==9)clearInterval(val)}, )
```



For the synchrounous code.
  # main task to do the call stack, is whatever variable function call just execute that's it..
      Call Stack have the global execution contest which is bottom of the call stack, once we run the entire code, it'll be deleted automatically from the memory.
    calll stack been in the js engine



Browser have the everything, js engine, localStorage, timer, bloatware access, geolocation access and lot more.

For accessing all of this js featuer from the call stack we've to conmmunicate with teh Browser.



Web Api:
setTimeout()
Dom Api()
Fetch()
localStorage()
Console()
Location()

# We've to use the window.setTimeout for accessing everyone to the web api, so window keyword is optional to use it here.

Above all not are js part rather these are the web api which provide by the Browser, even a console not a part of the js.


# on the SetTimeOut it execute with the Event Loop and callBack queue which waits to get a time on teh webapi.



# Event Loop task is to just hold the variable until that we've not something return from the web api.


