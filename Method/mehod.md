There are lot of method on the js:
The first method is the forEach method,
# ForEach also help us to iterate through the entire array, Used due to readablity and clean code,
  First parameter will always be the, item/value, if we want also index, we can give another param for the index,( we can give any name)


It's not easy to break from for each, it used when we want to iterate through the entire array,



When there is the body of the single line on the arrow function we dont' need to use the curly brace, (but make sure also don't need to return single line run automatically)
When there is only one param, we also don't need to use parenthese on the param on arrow function.: const singleParam=single=>single*99; example



Concise way to write a anonymous function of arrow function on the method.
We also can use the arrow fun on teh callback more precisly


When we've to break a structure, we've to use the destructure,
The Destructure extract a properties from object easily.

let objectAge=objectList.Age
let{ Age}=objectList;
Below is destcuture method.


when insert a any value, we've the same name we can just deinfe a property of that varaiable name, it'll automatically detected on teh structurint:
let n=23;
let obj={n}






Spread operator help us to expand a array element , it's copy array without modyfying original, it become a immutiablity,
# For The Spread Operator:
When we copy to another array, we can do: [...arr] to copy or even add other value: [...arr, 9, 10]

Spread on object, for add mroe element without modyfing original:
let newSpread={...objectList, lifeExperience: "Average"}


We also can use on the function




# Rest operator and spread operator must always be at the last:
Rest operator can be applicable to: Function, Array, Object



Spread operator is used for, collecting a remaining element, after extracting somee starting element.






# Set only store the unique keys 




# reduce mean we've to take all out of array and come up with single element like sum, maxValue.
like: n.reduce((allSum, startZero)=>allSum+startZero, 0)



# Array.some method of the js:
  - "Add the some array method of the js, which runs' same like the forEach but we can return if any condition doesn't match"