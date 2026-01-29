
### On the network tab, the indicator mean who send that file

# `type=module`
 - When we've done the type=module, anything on the js file we can't just directly access like:name, with the type=module

 - When we set the `type=module` it makes and code into a module scope, which only the module files can access it.
 while on the other hand if we don't set it makes the global scope of the code, which can access throughout global acces
- The useful another case, is the global access will not be polluted on the `type=module`

- the module statement, 



# `defer`
 - When we set the `type=module` the defer is automatically turn on, the defer mean, js file only render after the entire html is parsed, with a module/defer way we can import a js above a head,

 - If we dont' set a defer, and link within head, it can't load any dom,




 # Default Way of Script:
  - The way of how the type="module" work is without the `type=module`, now we can declare the any variablel on the js, without the variable named, like let const, var.
    Without `type="module"`, JavaScript runs in "sloppy mode" where:
- Assigning to undeclared variables creates global variables automatically
- They attach to the `window` object
- No `ReferenceError` is thrown

- All global variable would be act as the global variable declaration

- even on the function, on non script mode, it's declared as the global mode, which store on global mode, not function mode
 # But when we set a var/let/const insideFunction, it stay on a function. 
 >:warning: It's not the standard way, it's pollute a global space aviod this,






# type Module
-  type="module" automatically enables strict mode for the entire module. You don't need to add "use strict" at the top.
 



- [ ] Congratulation :tada:
