# bom is mean a browser object module, it's not on the mdn, rather given by developer widely known as bom.


- Bom is the object where it have key and can modified a value.

# we can access all the window object property without need to write a window

# Userful object model:
- ```location```
- ```history```
- ```innerHeight```
- ```innerWidth```
- ```open```
- ```close```
- ```resizeBy```
- ```resizeTo```
- ```moveTo```
- ```moveBy```
- ```scrollBy```
- ```scroll```
- ```scrollTo```
- ```print```
- ```document```





1. ```location``` property:
  - ```location.href```: For showing a entire url of the page, can also change the url with =,
  - ```location.reload```: Browser will reload it

2. ```history``` property: it's useful for gettting what are all the tab's we visited:
 - ```history.length```: total count how many tab's we visited
 - ```history.back()```: Go bakward or move backward what have we visit prevoiusly
 - ```history.forward()```: Go forward or move forward what have we visit forward, only we've visit something
 - ```history.go(-3)``` or ```history.go(2)```: Can go or backward n times with - back and default forward 

3. ```innerHeight```: Showing a inside a browser height of the page, ```outerHeight``` for showing a browser entire screen height

4. ```innerWidth```: Showing a inside a browser width of the page, ```outerWidth``` for showing a browser entire screen Width


5. ```open()```: Opening a new page
    - ```open("/contact.html")```: It'll open the contact page of that same domain
    - ```open("https://google.com")```: once we use https it redirect to the cross domain
    - ```open("https://google.com", "dipeshName")```: so after open that page, if we type ```name``` on the console or try to access a name we can get: dipeshName, it's useful for passing a any value to the cross domain

6. ```close()```: Can only close the page, that we've open with: open(), we can't close a tab that open manually

7. ```resizeBy(200, 200)```: Can Resize the page of any height width, but only applies to where that we've open a page with the three paramaeter: ```open("https://google.com", "name", "resizable")``` then only can resize a browser.

8. ```resizeTo(200, 200)```: Same as resizeBy height width


9. ```moveBy(0, 0)```: It'll move anywhere, but we can only modify where it opena that page with open() wtih threee param


10. ```moveTo(0, 0)```: Same as move By.


11. ```scrollBy(0, 200)```: Scroll the page by vertical top bottom also can be other param of smooth scrolling


12. ```scrollTo(0, 200)```: Scroll the page by horizontal left right if only exist also can be other param of smooth scrolling


13. ```print()```: Can do the printing of the page, like same as control+p where it open a printer it also open the printer



14. ```document```: It's the dom where it exist on the bom