# As the code get's complex, we've to make a organized for the specific task

> The common js method, which is not a in build, which use the `require()` method.


> When es6 came, js give the by default import export syntax which we cna use to make a organized code,


> Without the import export module, with the global space we also can define the different file to import export
# On index.html just add the order above that we'll be exporting just declare there and on import just declare that same name that's it.
  > :warning: But Only can access from the script.js file if we imprort those file top and script below, but on global space we can access from the console


    





# There's the two way of import export statement:
1. Named Export
2. Default Export


>:warning: We just have to connect with teh index.js file with set to the `type="module"` and inside index js make a main file. 

# Named Export
 - On the named Export we've to wrap a export module with the  `{exportModule}`
 - Ex: `const name="Dipesh"; export {name}`
- We can directly do the export default which only applied to the named:
    `export const name="Dipesh"`


# Default Export/Import
- We alway export/import without any curly brace
- `export default name`
-` import name from "./name.js";`
- We don't need to give the curly brace when we've doing default export
- We only can do the default once in single file
- Name doesn't matter on the default import/export but it matter on named export


# Import Everything with third way:
- We can also import with * Way:
- `import * as importEverything from "./github.js"
- It'll return a list of all the export on teh object,
- for accessing a default export we can do:   `importEverything.default()` Default
- Named export: `importEverything.todo` Named
- We can name anything on * way, but it's not recommend way




# Notes:
 - We Also can make a different export fileName or differeent import File Name on the both Named, and default Export:
 - `export {classRoom as Rooms}`
 - `import {Rooms} from "./class.js"`
    # Or
 - `export {classRoom}`
 - `import {classRoom as Room} from "./class.js"`

- We've to make sure give the file name at last to run
- WE can do both named export, default export in the single file





# On the import export, always the browser first import everything and then runs, once browser import it can runs instantly. 