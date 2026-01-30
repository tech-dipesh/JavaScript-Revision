Which engine does javascript use?



Dom Tree:
Tree Visualization (Brain-friendly)
Document
 └── html
      ├── head
      │     ├── title
      │     └── meta
      └── body
            ├── h1
            ├── div
            │     ├── p
            │     └── button
            └── script





# null and undefined difference
undefined → variable exists but no value was assigned.

null → developer intentionally set the value to “nothing.”

undefined is automatic; null is manual.

They are equal in loose comparison but NOT equal in strict comparison.

Types differ (undefined is undefined; null is object).

## we must use template string 100% time not concat.




 For the quick revision, i feel i forget the syntx of teh html, and css, how can i revise on quick time, so help me, around only 30 minutes ok



# equality and strict euqliaty
Equality:
== converts types before comparing, so "1" == 1 becomes true.

=== compares value and type, so "1" !== 1.

== can create hidden bugs because of auto-conversion.

Always prefer === in real projects.

They behave the same ONLY when types are already identical.







Also help me to understand the callback



how to use teh debugging on the javascript efficiently both on the vs code and also on the browser,





## Destrcture help us to unpack aray value easily 




Differene between teh map, forEach and the forOf Loop what to use when.
# 🎯 BIG PICTURE (One-line meaning of each)
Method	Purpose	Returns Something?	Best For
map	transform array → create a new array	✅ YES	when you want a new modified array
forEach	run a function on each item	❌ NO	when you only want to perform an action
for…of	loop over values easily	❌ NO	when you need simple loop + break/continue






What's the best practice to add teh style code and teh script code or linking on the html,
should we keep top of the html file of linking or internal css js code or at the lat ssuggest me







# append can add multiple data and even accept string while appendChild only one element and no string.


# clearInterval(id) stops the repeating timer using that ID



# .value works only on form elements (input, textarea, select).
.value stores the user's typed data.
.innerText sets or reads visible text inside HTML elements.
<li> doesn’t have .value, so use .innerText.

If the element doesn’t collect user input → don’t use .value.



Event Delegation explain
# Event delegation lets us handle events for child elements by attaching a single listener to the parent. Then we use e.target to know which child was interacted with.”


# with bracket and without bracket both are same on arrow function.



how to write a modular, reusable and funcitonal code on the interview.






# what is tree shaking in js?
# What is the purpose of the requestAnimationFrame method?
What are some common performance bottlenecks in JavaScript applications?
