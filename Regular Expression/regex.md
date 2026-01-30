Regex is useful for finding a complex pattern.
# Vs code use regex to find inside files or folder


If we use .replace it only replace the first on js: jsStore.replace("very", "Not a very");

It useful for: 
  1. Validate text 
  2. Search Throught Text.



Still have to learn about: .match, .search, .replace array method.



# Delimiters is used for set a limit.
# Literal character is a without special meaning: abz123
# Meta character have the special meaning: Ex: ~!@#$%^&&*|()



  - . is a special characther that select everything except: /n  ```Hello World``` it select HelloWorld, 
      but don't select space a .

  - but when we use: \. that only select ```.``` 


## If we don't select a global it'll select only first matching.

# Flags:
  - ```g``` so this select a all matching, if we dont' select only first matching show.
  - ```i``` select a case insensitive content,
  - ```s``` Also select a enter and tab when we use s
  - ```u``` Unicode character.
  -  ```y``` Only select with non space (Not useful)


# Anchors:
```^``` Start with and ```$``` and end with dollar.


# Character Class:
   Define set of value to match: ```[a-zA-Z0-9]``` only chars. difference a difference b
   - Negated Character: ```[^A-Z]``` opposite a normal not find.

## We only can set a regex in increasing order like: ```e-i``` not ```i-e``` in the ascii order.


# Quantifiers:
  - ```[a-z]{3}``` it select the size of the three consecetive charachters.
  - ```[a-y]{4, }``` : Select till the space but only select where the size is bigger than 4.
  - ```[a-zA-Z0-9]{5,9}``` : ONly size between 5 to 9
  - ``` [a-z]+ ```: Match the one or more characters.
  - ```[a-z]?```: Select 0 or 1 char same as: ```[a-z]{0, 1}```
  - 


# i should use .test when i want the true false condition and i should use .match when i want multiple true false condition.
ex: s="Dipesh Sharma"
s.test(/^[A-Z]$/): only true false.
s.match(/^[A-z]$/): all match element if not null.


# find the Element after that element.
  t after e all elements.