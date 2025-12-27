Dom is the api to manipulating html object.
# The dom represent html document tree of nodes with each individual are the nodes.
 Any node has the relationship to other node in the dom tree.

 

 for the dom query selector: we can also select first the parent root and inside parent like:parenet.getElementById("insideTag") can select the nested Tag



 Query Selector Help us to select one or more element that it matched:


 For getting the first Child or the last child from the parent:
 firstElementchild and lastElementchild for the last.


 For counting a total child Element: topHead.childElementCount
 

 For selecting a next sibling or previous Sibling:
 previousSibling, nextSibling,


new 
 # Document.createElement("h3) create a new node/tag to the dom.


1. For Adding to the page:
document.body.appendChild(Val)



Now with teh . operator we can set id, class and any value that we would like to: 
Val.classList="valClass"



1. appendChild:
appendChild will add a new node to the end of the parent root: divBar.appendChild(liList)
We can keep adding as much element as want with appendChild





textContent will show all the page, while innerText show the visible content on the html.
while innerHTML is used for the adding a new content that's used with accept the html raw and convert to html.


# After method is used for insert a one or more node,
let createNewH1=document.createElement("h1")
selectDiv.after(createNewH1, createNewH2)
After that Node.
Can also add teh multiple Eleement,


# append: Append insert a multiple element also a string while appendChild not.


# Inset at different position:
selectDiv.insertAdjacentElement("afterend", whatElementInsert)
we can either use: afterend, beforeend, beforebegin, afterbegin, (insert to the parent node.)



# cloneNode()
 let copyNnode=selectH3.cloneNode()
Make the copy of the original Node. (if we pass the true argument it also clone a descendant)



# removeChild()
For remove a child of the node, it's used:
removeTheChild.removeChild(removeTheChild.firstElementChild)
rootNode.removeChild(rootNode.firstElement/lastElement) (either we can remove first or last node)



# insertBefore
insert a node before that node with arg: beforeNode and newLy Node
      selectDiv.insertBefore(createNewP, createNewP.firstElementChild)




## Attributes:

# getAttribute: Get the what value is on there on the attribute mean, on that input value.
let selInput=document.getElementById("idInput")
          console.log(selInput.attributes);  (show all the avaible attributes there exist.)
console.log(selInput.getAttributes("placeholder")) (show that specific attribute)


# hasAttribute: Return true or false:     console.log(selectInput.hasAttribute("value"));



# setAttribute: Set a new Attribute or existing attribute: selectId.setAttribute("id", "newIdChange")


# removeAttribute: just delete that attribute: seelctInput.removeAttribute("class")





## Style
 # .style: show entire internal style with: console.log(mainSelect.style.backGroundColor);
 set Property:
mainSelect.style.marginTop="20 px"
mainSelect.style.height-="30px"
Can do the insideSum

# Default Value:
          console.log(window.getComputedStyle(h1Select)); Show all the default values that with the window object.

# Exist Check Value:     console.log(window.getComputedStyle(mainSelect).backgroundColor);


# Show All Avaible Class: console.log(h1Select.className);

We also can add new Class with className property:     h1Select.classList="fourthH4" (override existing class),     h1Select.classList+="fourthH4" (append to existing )

  h1Select.classList.toggle("firsth1") (Add to the class if not exist, if exist remove from class)


  







