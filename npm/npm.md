## Use Libraries without any npm library:
- as on the npm that why it need, that with the cdn we also can make the global space for the any package to import,

- When we use only one/two library that we may not to use the npm, we can link that library from the npm in the html file.

- During a time when there's no npm we make a cdn link at that time it also work.

- But When we use this it make a global space pollute, or it define everything into the global space


# Disadvantage of using the cdn library:
 - As the entire code of the cdn is on their website, so when the website is down, entire code is effected.
- AS it make the global space polluted, not recommend to use the global space
 

# When we open that cdn library that cdn library will have the entire code database.

- For Avoiding of website down that we can save the entire code of the cdn to that file and can link that script file.
- But it's still not recommend way do it, as it still on the global space.
- For solve the solution We use the npm


- Inside the npm there are lot's of libraries that developed by other developers, for bigger project we've to use the npm rather than the cdn.
- With the help of 





# Process of NPM:
- npm init: is help us to create a npm package which create the package.json file.
- When we instal the any library, it create the node_modules for storing that library code, as every library use a another libraray to create, on node_modules, even if i install a single library it install the ten's of library need for run that associated library with what have we install it.
- npm init -y: create a package manager with default values
- on the every node_modules library the've the own package.json where it stored what library that library is using, every library depend on another libary








## devDependencies:
- as on every library that it have some dependancy, so even if we download the single dependancy, it download the multiple and that multiple library have some dependencies.
- npm i parcal -D : it mean download that npm package as a development purpose only, it'll not have on that project, only used for development purpose when we deploy it, it'll be no deployed a -D packages.
- devdependencies doesn't go on the build





# Import Library:
only we've to give the name of the library that npm will automatically execute that folder path from node_modules
 - We've to define the type: "module" on the package.json so it can make the import export statement.
  
  ##### With on the noral frontend html,css, first we've to make the type="module" on html, alongside, it can't run of the import export module on the frontend,
  ###### It's mainly used for backend, for making a parcer on single file and run it,



# Parcel File Run:
- For running a html file with the import statement, we use the parcel where it make bundle and run the html file,: 
- on normal live server it's pure live server with having no bundler, with the parcal it've the own bundler with separate localhost.
- After Installing a parcel, now the localHost will have different server: 
- npx parcal index.html: npx is for the temporary one time, while npm for pernament.
- on that parcal, when we go to network tab it doens't send a index.js as we make a link, rather it make own encryped file
- When we open that encrypted file, it first bundle that file, and after that it 
- After installing the parcel, it make the own folder inside that to run a parcal server



# Package Install:
- npm i: The npm will check all the dependencies on the package.json, and it'll automatically install all the packages 
- npm i and npm instal are teh same thing:
- npm update: Update all if no specified.
- npm deprecate: show any list deprecated
- npm outdated: check outdated update
- npm ls: show all npm library that we downoad


# version:
- when we do: npm i, the npm first look from the package-lock.json  about the package and also a version, if it doesn't found on package-lock.json it look on the package.json
- 1.13.2: This version have 3 meaning, 1 mean major update, if this new version coming, it'll be the breaking changes, that we've to update if any new version chagne from older major version,
  -- 13 mean it's the minor update, it's not affecting a system, only new feature no break
  -- 2 mean Patches update, it's the bug fix, and security fix version


# package-lock.json:
- on package-lock.json, any package have teh exact version on parcel, while on the package.json, it've the , ^ and ~ have.
- When package-lock.json doesn't exist, it install from the package.json.

# package.json:
- It only udpate when it's update on the npm server.
- 3.1.4: ```3 Major Update, 1 Minor Update, 4 Patches Updates```
- parcel: ^3.1.4: caret ```^``` mean it can only increase the patches update and minor update of: 1.4 when any new udpate comes.
- parcel: ~3.1.4: tilde: ```~``` mean only increase th patches udpate, ont minor update, 
- parcel: "*": mean update latest no matter what, even patches udpate, it's not recommend.

## Recommend is: ^3.1.4







# Parcel Console:
- During parcel the browser output is stored on the parcel directory, then show a output