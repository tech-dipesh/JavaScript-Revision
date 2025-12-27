Event is the action that occurs on the web browser.
When we move the mouse that's mousemove event while it's load it's a load event. 


As on the dom tree wise, when we click on teh button it goes like this: button->div->body->document->window
That mean we are event occur to the window object not just that node.

 # Even Bubbling & Event Capturing:
 ## Event Bubbling: Event stats at the most specific element to the least specific element, and goes to least specific element, like: from button->div->window
## Event Capturing: Event start at the least specific to most with bottom down approach: from: window->body->div->button


# Event handleer also known as event listener.


onClick can also call within the html, and it can also call the function or print there.


When the event occur the web browser passed a event object, to the event occur. The object can be: evente

  <button onclick="console.log(event.type)">Submit me</button>
//with the event also we can find teh type of the event, type will be the evnt.

With the event.target: we can find out which event is occured. of that a html element.
# this keyword can be used refer to the target Element.

(this.className): can be help to find the id, class or any other element.
# also cc(id) can be good if inside a html




# SEcond method of the event:
 let First=document.getElementById("Nameprint")
First.onclick=function(){
  console.log("button is Clicked");
}

##   console.log(this); Can also do the this to print that entire html


Second method event handerl just set the onclick to null that's it.



# AddeventListener will register a event handler, while removeEventListener will remove a event handler.



## addEventListener will have the 3 args: (event, function, useCapture)
useCapture is boolean and by default it set's to false, it's related to the eventBubbling.
third option is optinal, 




# removeEventListener:
removeListener will remove the event that's added by the addEventListener, we can't remove a anonymous function, so it should have named function which we can call.


Remove event listener is used for the free up the memory that take by addEventListener,



The event if we pass e as args, and console e.target it'll showing the entire h1 element,




Other Useful Event Listener:
mousemove: when you move mouse/cursor around the element.
mousedown: when press the mouse button
mouseup: when we release the mouse button
mouseover: when mouse move from outside to inside boundary element.
mouseout: when mouse move to another element
keydown: when we press the key on the keyword: 
keyup: when we release the key on keyword
keypress: when you press on character, repeatdly while you hold down keyword
scroll: when we scroll the docs or element.
input: when we type something on  that input
load: when there is any state is change on the paeg.



# Event Delegation: 
 the function defined as a const arrow function has a scope issue that makes it inaccessible to the inline onclick HTML attribute. 

 Event delgation is a part of the event bubbling.