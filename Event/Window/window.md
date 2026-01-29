For getting the user Client side height and width with the window property we can use:
alert( window.innerWidth ); // full window width
alert( document.documentElement.clientWidth ); // window width 


# on the dom when we want to insert a text directly use:
let textNode = document.createTextNode('Here I am');


const createNode=()=>{}
- For removing  a any node or clearing with function help 
clear(createNode)


- For getting where use click of coordinate x and y:
fun(e){
  e.pointX
  and e.pointY
}


For making a forbiddena  copy:
oncopy("Copy is forbidden")
return;

- e.The relatedTarget property returns the element that triggered the mouse event.
  but it doesn't return anything,



  -- For gettting a current minutes hour time,
  new Date().getHours(), new Date().getMinutes()


  # When to use the e.preventDefault()
    Without preventDefault()
        User clicks submit → page reloads → you lose the data → JS cannot validate properly.
      Browser default behavior = reload the page.
        With preventDefault()
        You stop the reload → validate input yourself → decide what to do next.


# accessing a form element:
    let getFormValue=document.forms.formml
    with name formml of form we can access the entier form

    alert(getFormValue.elements.firstInput.value)

GetFormValue is form name, and firstInput is the inputName this way can access a form values.




## when there's the same namem of html we can just access with array access.


 ## for getting a form element more easily:
        <form action="" id="form"><fieldset>
      <input type="text" value="First Scale Value" name="scal">
    </fieldset></form>
    alert(form.scal.value)
  Print a form name scal vlaue with fieldset and id.


  # even shorter way to access on the form:
  ```
  form id="forml" >
    <input type="text" name="firstInput" value="Consoel should be this.">
  </form>
    alert(forml.firstInput.value)
    ```

With the only id name of form and name we can even access that element document is optional also  now.



