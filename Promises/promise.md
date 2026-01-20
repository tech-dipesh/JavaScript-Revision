# Promise help us to achieve a asynchrounous operation of the js, which can help us to do: success failure or pending response.

# Promise either return pending, resolved, rejected.


Promise have the 3 state that we can use: .then, .catch, .finally


.finally run on the promised whether it's fullfill or rejected.
.finally generally used for free the resources tha we use earlier.

Finally don't recieve anything as it irespective it runs.


Promise can also have the multiple .then based on the different condition.



When we want to use the multiple promises on the js:
let thirdPromiseChain=Promise.all([PromiseTesting, SEcondPromise]);




# Total 6 Promise API:
promise.all(alpromises): There are the multiple promise to waiting if any proimse failed all will be rejected.
Promise.allSettled(allpromises): Wait all permises to run and return their result,
Promise.race(allpromses): Wait a first promise to run 
Promise.any([firstPromise, secondProims]): if all promise throw reject then only throw a reject. 
Promise.resolve([firstPromise, secondProims]): Make s resolve of the given promise state.
Promise.reject([firstPromise, secondProims]): Make reject of the promise state.




Fetch api helps us to make the http request of the javascript, it's a promised api, of asychrounous operation.


# The async and await is build in above the promises which help us to write readable code on asychrounous operation.

Async is define before the function defination, async is always return the promises.
# and await is used for the, pause the execution, until promise is resolved, # await is used only inside the async, 


Promise is the object.




Async and Await:


Try and Catch: