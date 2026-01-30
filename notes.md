# Javascript is syncrhounous single threaded language.

js runs on the two phase during memory creation time, variable is assinged a undefined while function assinged the entire code inside function.


on the function invoke steps it again do the 2 steps

after completing a execution contest it'll deleted automatically fromm the memory.

on the call stack it've the global execution contest.




Famous Console:
console.log
console.warn
console.error
console.clear



v8 is the written on the cpp which helps to run on teh browser,



The key differnece on teh null and undefined:
Both return the false value:
null mean no value that, but on undefined the value is declare but not yet initliazed

# null type is undefined, while undefined type is undefind
# null value eqal to 0, while undefined value equal to: NaN: (Not a number)



For the strict equality: that the data types is also must be the same, 


# Function are first class citizen on js:
    which we can take a function and pass it to the another function, the pass function is calleld a callback function.



# JavaScript is the single threaded language.






# javascript also have the set and  map, beside array to host a differnt data type. 



# When i want to reload the page that location or the entire Page:
It'll reload the entire page.
window.reload()

## only that location where we're reload:
        location.reload();

# Famous Date Method:
 ## new Date(): UTc current number time & date
 ## Date.now(): total Millisecond after 1970 jan
 ## new Date().getTimezoneOffset(): Return the timezone difference in minutes
 ## new Date().toLocaleString(): Local Time in String
 



 # Event Delegation: It's quite useful when we want to make eventlistener to the child ratehr addEventLister to every child we use Event Listener
    ## on the select any target tagName on delegation, we must use the upper case due to browser behavious.
    ## it's the event bubbling, due to click on child and event move up, '
    ## event capturing always have the third argument of the true, when we want only run the parent,  


Dsa mean solving a puzzle with corrrectness where we think about condition loop logic, and we check is my approach optimal
while on the developerment mean design a room which we think where things go, how people move around, what happend when we click something, we care about behavious not a logic.



# on any event when we want to get those a event capturing to bottom:
      console.log(e.target), with this we can konw what button is clicked.

## on web api when we no declare any variable js internally will declare a let automatically.


# we should prefer to use the _variableName, that is recommend by js when that the variable is unused.






## Javascript is everything happended a execution context.
on execution it have 2 memory componenet and code component.
memory componenet also called a variable envirnment, and code component called a thread of execution





Javascript runtime environment is not possible without js enginer.



# Scope mean where we can access any variable/function or not.

2025/11/07
# 
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an object method, this refers to the object.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.




#
{} is used for named exports because you must use the exact export name.

No {} for default exports because you can name it anything when importing.

Use default exports when a file has one main thing.

Use named exports when a file has multiple things to import individually.



this means “the object calling the function right now.”
In objects: this = that object.
In normal functions: this = global object.
Arrow functions don’t have their own this → they inherit it.
You can manually set this using call(), apply(), bind().





# lexical mean in heirachy and sequence.


# Scope Mean where we can access our specific variable or a function on our code.
## Scope is directly dependent on th lexical envirnment.

## lexical envirnment is the local memory, along with the lexial environemtn of the paren.


# on each lexial child hierachy, therer's the one reference which reference to the lexial envirnemtn of teh parent hierachy with the reference.+ and also the lexial environemtn of the parent parent.

# in case of the parent is global it can't go grandparent lexial envirnement.

# also it work on the base of the cal stack.





- We should make index.html default, as every browser serve the index.html as default page, so even if we go to homepag, index.html page is server there, 


# On the import export, always the browser first import everything and then runs, once browser import it can runs instantly. 





- Javascript by default sorting libraray of: `arr.sort()` use the alphbet order, if we want the order to be a ascending order/descending order we've to use teh callback: `arr.sort((first, second)=>first-second)` Now with the callback function it work as expected.


